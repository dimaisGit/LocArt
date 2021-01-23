export interface ITheme {
    html:IThemeHtml,
}

export interface IThemeHtml {
    body: IThemeBody
}

export interface IThemeBody {
    color: string[],
    languageSwitcherBackgroundColors: string[]
    languageSwitcherFontColor: string
}

export interface ITHemeParticlesBackground {
    particleColor: string
}
