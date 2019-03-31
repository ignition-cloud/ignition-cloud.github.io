module Main exposing (main)

import Browser
import Bulma.Elements exposing (..)
import Bulma.Layout exposing (..)
import Bulma.Modifiers exposing (..)
import Bulma.Modifiers.Typography exposing (textCentered)
import Html exposing (Attribute, Html, main_, p, strong, text)


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
        [ heroView
        , footerView
        ]


heroView : Html Msg
heroView =
    hero { heroModifiers | color = Primary, size = Medium }
        []
        [ heroBody []
            [ container []
                [ title H1 [] [ text "Ignition" ]
                , title H2 [] [ text "Self-service product configuration for complex offerings" ]
                ]
            ]
        ]


footerView : Html Msg
footerView =
    footer []
        [ container []
            [ content Standard
                [ textCentered ]
                [ p []
                    [ text "©"
                    , text " 2019 "
                    , strong [] [ text "Ignition" ]
                    ]
                ]
            ]
        ]
