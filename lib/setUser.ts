
type IToken = {
    token: string | null;
}

let accessToken: IToken;

export const setToken = (token : string | null) => {
    const accessToken: IToken = {token}
}

export const getToken = () => {
    return accessToken;
}