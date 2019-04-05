module Demo exposing (Model, Msg, init, update, view)

import Bulma.Columns exposing (ColumnModifiers, column, columnModifiers, columns, columnsModifiers, narrowColumnModifiers)
import Bulma.Components exposing (MenuListItem, menu, menuLabel, menuList, menuListItem, menuListItemLink)
import Bulma.Layout exposing (SectionSpacing(..), hero, heroBody)
import Bulma.Modifiers exposing (Color(..), Size(..), Width(..))
import Html exposing (Html, text)
import Html.Events exposing (onClick)
import Http
import Json.Decode exposing (Decoder, field, string)
import RemoteData exposing (WebData)
import Url.Builder as Url


type alias Model =
    { catalog : WebData Catalog
    , detail_view : CatalogDetailView
    }


type CatalogDetailView
    = NoView
    | FamilyView Family
    | ExclusionRulesView
    | InclusionRulesView


type alias Catalog =
    { catalog_id : String
    , families : List Family
    , exclusions_rules : List ExclusionRule
    , inclusions_rules : List InclusionRule
    }


type alias Family =
    { family_id : String
    , items : List ItemId
    }


type alias ExclusionRule =
    { conditions : List ItemId
    , exclusions : List ItemId
    }


type alias InclusionRule =
    { conditions : List ItemId
    , inclusions : List ItemId
    }


type alias ItemId =
    String


type Msg
    = CatalogRetrieved (WebData Catalog)
    | ShowFamily Family
    | ShowExclusionRules
    | ShowInclusionRules



-- INIT


init : ( Model, Cmd Msg )
init =
    let
        model =
            { catalog = RemoteData.Loading
            , detail_view = NoView
            }
    in
    ( model
    , fetchCatalog "computer-parts"
    )



-- UPDATE


update : Msg -> Model -> Model
update msg model =
    case msg of
        CatalogRetrieved catalog ->
            { model | catalog = catalog }

        ShowFamily family ->
            { model | detail_view = FamilyView family }

        ShowExclusionRules ->
            { model | detail_view = ExclusionRulesView }

        ShowInclusionRules ->
            { model | detail_view = InclusionRulesView }



-- VIEW
-- FAMILY LIST VIEW


familyListView : List Family -> Html Msg
familyListView families =
    column narrowColumnModifiers
        []
        [ menu []
            [ menuLabel [] [ text "Families" ]
            , menuList [] <|
                List.map familyListItemView families
            , menuLabel [] [ text "Rules" ]
            , menuList []
                [ menuListItem []
                    [ menuListItemLink False [ onClick ShowInclusionRules ] [ text "Inclusions" ]
                    ]
                , menuListItem []
                    [ menuListItemLink False [ onClick ShowExclusionRules ] [ text "Exclusions" ]
                    ]
                ]
            ]
        ]


familyListItemView : Family -> MenuListItem Msg
familyListItemView family =
    menuListItem
        [ onClick <| ShowFamily family ]
        [ menuListItemLink False [] [ text <| family.family_id ]
        ]



-- FAMILY DETAIL VIEW


familyDetailView : Family -> Catalog -> Html Msg
familyDetailView family catalog =
    column columnModifiers
        []
        (List.map itemListItemView family.items)


itemListItemView : ItemId -> MenuListItem msg
itemListItemView itemId =
    Html.pre [] [ text itemId ]



-- EXCLUSION RULES DETAIL VIEW


exclusionRulesDetailView : Catalog -> Html Msg
exclusionRulesDetailView catalog =
    column columnModifiers [] []



-- INCLUSION RULES DETAIL VIEW


inclusionRulesDetailView : Catalog -> Html Msg
inclusionRulesDetailView catalog =
    column columnModifiers [] []


view : Model -> Html Msg
view model =
    case model.catalog of
        RemoteData.NotAsked ->
            Html.div [] []

        RemoteData.Loading ->
            Html.div [] []

        RemoteData.Failure _ ->
            Html.div [] []

        RemoteData.Success catalog ->
            let
                detailView : Catalog -> Html Msg
                detailView =
                    case model.detail_view of
                        NoView ->
                            \_ -> column columnModifiers [] []

                        FamilyView family ->
                            familyDetailView family

                        ExclusionRulesView ->
                            exclusionRulesDetailView

                        InclusionRulesView ->
                            inclusionRulesDetailView
            in
            hero { bold = True, color = Dark, size = Small }
                []
                [ heroBody []
                    [ columns columnsModifiers
                        []
                        [ familyListView catalog.families
                        , detailView catalog
                        ]
                    ]
                ]



-- HTTP


fetchCatalog : String -> Cmd Msg
fetchCatalog catalogId =
    Http.get
        { url = retrieveCatalogUrl catalogId
        , expect = Http.expectJson (RemoteData.fromResult >> CatalogRetrieved) catalogDecoder
        }


retrieveCatalogUrl : String -> String
retrieveCatalogUrl catalogId =
    Url.crossOrigin "https://ignition-app.xyz"
        [ "v1", "projects", "examples", "catalogs", catalogId ]
        []


catalogDecoder : Decoder Catalog
catalogDecoder =
    Json.Decode.map4 Catalog
        (field "catalogId" string)
        (field "families" (Json.Decode.list familyDecoder))
        (field "exclusionRules" (Json.Decode.list exclusionRuleDecoder))
        (field "inclusionRules" (Json.Decode.list inclusionRuleDecoder))


familyDecoder : Decoder Family
familyDecoder =
    Json.Decode.map2 Family
        (field "familyId" string)
        (field "items" (Json.Decode.list itemDecoder))


exclusionRuleDecoder : Decoder ExclusionRule
exclusionRuleDecoder =
    Json.Decode.map2 ExclusionRule
        (field "conditions" <| Json.Decode.list itemDecoder)
        (field "exclusions" <| Json.Decode.list itemDecoder)


inclusionRuleDecoder : Decoder InclusionRule
inclusionRuleDecoder =
    Json.Decode.map2 InclusionRule
        (field "conditions" <| Json.Decode.list itemDecoder)
        (field "inclusions" <| Json.Decode.list itemDecoder)


itemDecoder : Decoder ItemId
itemDecoder =
    Json.Decode.string
