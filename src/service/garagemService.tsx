import { Api } from "../providers/Axios"
import { CreateGaragemI } from "../types/Garagem"

const createGaragem = (nomeGaragem: CreateGaragemI) => Api.post('/garagem/criar',nomeGaragem)

export {
    createGaragem
}
