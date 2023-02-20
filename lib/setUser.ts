type IToken = {
    token: string | null;
}

export let accessToken: IToken;

export const setToken = (token : string | null) => {
    accessToken = { token }
}

const getToken = () => {
    return accessToken;
}