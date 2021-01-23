export const languagesNames: ILanguagesNames = {
    EN: "EN",
    RU: "RU",
    PZ: "PZ"
}

export const languages: ILanguage[] = [{
    name: languagesNames.EN,
    index: 0
}, {
    name: languagesNames.RU,
    index: 1
}, {
    name: languagesNames.PZ,
    index: 2
}]


export interface ILanguagesNames {
    EN: string;
    RU: string;
    PZ: string
}

export interface ILanguage {
    name: string,
    index: number
}