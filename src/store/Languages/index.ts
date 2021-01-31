import { makeAutoObservable } from "mobx";
import { ILanguage, LANGUAGES } from "src/constants/languages";

class Languages {
    public choosedLanguge: ILanguage = LANGUAGES.en;

    constructor() {
        makeAutoObservable(this)
    }

    changeLanguage = (choosedLanguage: ILanguage): void => {
        console.log("new language")
        this.choosedLanguge = choosedLanguage;
    }
}

const languagesStore = new Languages();
export default languagesStore;