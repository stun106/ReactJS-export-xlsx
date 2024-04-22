import { Api } from "../providers/Axios"

const createGaragem = (nomeGaragem: string) => Api.post('/garagem/criar',nomeGaragem)

export {
    createGaragem
}
