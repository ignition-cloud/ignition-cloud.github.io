module Main exposing (main)

import Browser
import Bulma.CDN as Bulma
import Bulma.Elements exposing (..)
import Bulma.Layout exposing (..)
import Bulma.Modifiers exposing (..)
import Bulma.Modifiers.Typography exposing (textCentered)
import Html exposing (Attribute, Html, main_, p, strong, text)
import Html.Attributes exposing (href, rel)


type alias Model =
    {}


type Msg
    = NoOp


main : Program () Model Msg
main =
    Browser.sandbox
        { init = {}
        , view = view
        , update = \_ -> \model -> model
        }


fontAwesomeCDN =
    Html.node "link"
        [ rel "stylesheet"
        , href "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        ]
        []


view : Model -> Html Msg
view _ =
    main_ []
        [ Bulma.stylesheet
        , fontAwesomeCDN
        , heroView
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
