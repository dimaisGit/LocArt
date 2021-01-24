import { action, observable } from "mobx";

export interface ISettingsParams {
    needRain: boolean;
    rainIntensivity: number;
}

export default class Rain {
    @observable params: ISettingsParams = {
        needRain: false,
        rainIntensivity: 1000
    }
}