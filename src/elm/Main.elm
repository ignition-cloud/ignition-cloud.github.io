module Main exposing (main)

import Browser
import Bulma.Columns exposing (ColumnModifiers, column, columnModifiers, columns, columnsModifiers)
import Bulma.Components exposing (navbar, navbarBrand, navbarBurger, navbarItem, navbarModifiers)
import Bulma.Elements exposing (..)
import Bulma.Layout exposing (..)
import Bulma.Modifiers exposing (..)
import Bulma.Modifiers.Typography exposing (textCentered)
import Html exposing (Attribute, Html, br, main_, p, span, strong, text)


type alias Model =
    {}


type Msg
    = NoOp


main : Program () Model Msg
main =
    Browser.sandbox
        { init = init
        , view = view
        , update = update
        }


init : Model
init =
    {}


update : Msg -> Model -> Model
update msg model =
    model


view : Model -> Html Msg
view _ =
    main_ []
        [ navbarView
        , heroView
        , valuePropositionsView
        , footerView
        ]


navbarView : Html Msg
navbarView =
    navbar navbarModifiers
        []
        [ navbarBrand []
            (navbarBurger False
                []
                [ span [] []
                , span [] []
                , span [] []
                ]
            )
            [ navbarItem False
                []
                [ title H3 [] [ text "Ignition" ]
                ]
            ]
        ]


heroView : Html Msg
heroView =
    hero { heroModifiers | color = Primary, size = Medium }
        []
        [ heroBody []
            [ columns columnsModifiers
                []
                [ column heroColumnModifiers
                    []
                    [ title H1 [] [ text "Simple product modeling for complex offerings" ]
                    , title H6 [] [ text "Increase your conversion rate by letting customers explore your product themselves" ]
                    ]
                ]
            ]
        ]


heroColumnModifiers : ColumnModifiers
heroColumnModifiers =
    let
        widths : Devices (Maybe Width)
        widths =
            columnModifiers.widths
    in
    { columnModifiers
        | offset = Width1
        , widths =
            { widths
                | tablet = Just Width10
                , desktop = Just Width5
                , widescreen = Just Width5
                , fullHD = Just Width5
            }
    }


valuePropositionsView : Html Msg
valuePropositionsView =
    section NotSpaced
        []
        [ columns { columnsModifiers | centered = True, multiline = True }
            []
            [ column valuePropColumnModifiers
                []
                [ box
                    []
                    [ title H6 [] [ text "Create a path for customers to discover your product" ]
                    ]
                ]
            , column valuePropColumnModifiers
                []
                [ box
                    []
                    [ title H6 [] [ text "Help customers design what is right for them" ]
                    ]
                ]
            , column valuePropColumnModifiers
                []
                [ box
                    []
                    [ title H6 [] [ text "Build a simple product model from your complex business rules" ]
                    ]
                ]
            ]
        ]


valuePropColumnModifiers : ColumnModifiers
valuePropColumnModifiers =
    let
        widths : Devices (Maybe Width)
        widths =
            columnModifiers.widths
    in
    { columnModifiers
        | offset = Auto
        , widths =
            { widths
                | tablet = Just Width11
                , desktop = Just Width6
                , widescreen = Just Width4
                , fullHD = Just Width3
            }
    }


footerView : Html Msg
footerView =
    footer []
        [ container []
            [ content Standard
                [ textCentered ]
                [ p []
                    [ text "© 2019 "
                    , strong [] [ text "Ignition" ]
                    ]
                ]
            ]
        ]
