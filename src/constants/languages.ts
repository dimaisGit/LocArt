export const LANGUAGES: ILanguages = {
    en: "en",
    ru: "ru"
}

export type ILanguages = {
    [index in ILanguage]: index
}

export type ILanguage = "ru" | "en";