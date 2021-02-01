export const ROUTER_NAMES: IRouter = {
    settings: "/settings",
    creator: "/creator",
    sponsor: "/sponsor",
    guest: "/guest/:slider"
}

export const ROUTER_LINKS: IRouter = {
    settings: "/settings",
    creator: "/creator",
    sponsor: "/sponsor",
    guest: "/guest/0"
}

export interface IRouter {
    settings: string,
    creator: string,
    sponsor: string,
    guest: string
}