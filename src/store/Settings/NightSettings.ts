import { makeAutoObservable } from "mobx";

class NightSettings {
    public starsIntensivity: number = 2000;

    constructor() {
        makeAutoObservable(this)
    }

    setStarsIntensivity = (starsIntensivity: number): void => {
        console.log("new stars count")
        this.starsIntensivity = starsIntensivity;
    }
}

const nightSettingsStore = new NightSettings();
export default nightSettingsStore;