import { createGlobalStyle }  from "styled-components";
import { ITheme } from "./types";

export const GlobalStyles = createGlobalStyle`

body {
    background: ${({theme}: {theme: ITheme}) => theme.html.body.color[1]};

    -webkit-animation: gradient 40s ease infinite;
    -moz-animation: gradient 40s ease infinite;
    animation: gradient 40s ease infinite;
}

.tsparticles {
    position: relative;
}

@-webkit-keyframes gradient {
    0%{background: ${({theme} : {theme: ITheme}) => theme.html.body.color[0]}}
    50%{background: ${({theme} : {theme: ITheme}) => theme.html.body.color[2]}}
    100%{background: ${({theme} : {theme: ITheme}) => theme.html.body.color[1]}}
}
@-moz-keyframes gradient {
    0%{background: ${({theme} : {theme: ITheme}) => theme.html.body.color[0]}}
    50%{background: ${({theme} : {theme: ITheme}) => theme.html.body.color[2]}}
    100%{background: ${({theme} : {theme: ITheme}) => theme.html.body.color[0]}}
}
@keyframes gradient {
    0%{background: ${({theme} : {theme: ITheme}) => theme.html.body.color[0]}}
    50%{background: ${({theme} : {theme: ITheme}) => theme.html.body.color[2]}}
    100%{background: ${({theme} : {theme: ITheme}) => theme.html.body.color[0]}}
}
`;
