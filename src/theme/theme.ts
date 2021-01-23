import { ITheme } from "./types";

export const lightTheme: ITheme = {
    html: {
        body: {
            color: [
                "#5cd3f7",
                "#23a6d5",
                "#ffdd61",
                "#fc9356",
            ],
            languageSwitcherBackgroundColors: [
                "#23a6d5",
                "#ffdd61",
                "#fc9356",
            ],
            languageSwitcherFontColor: "#000"
        }
    }
}

export const darkTheme: ITheme = {
    html: {
        body: {
            color: [
                "#111c70",
                "#240059",
                "#0b001c",
                "#000"
            ],
            languageSwitcherBackgroundColors: [
                "#111c70",
                "#240059",
                "#0b001c",
            ],
            languageSwitcherFontColor: "#fff"
        }
    }
}