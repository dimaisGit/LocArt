export interface ITheme {
    html:IThemeHtml,
}

export interface IThemeHtml {
    body: IThemeBody
}

export interface IThemeBody {
    color: string[]
}

export interface ITHemeParticlesBackground {
    particleColor: string
}
