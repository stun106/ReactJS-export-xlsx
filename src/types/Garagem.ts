import { CarrosI } from "./Carros";

export interface IGaragem {
    id:number
    nome: string,
    carros: CarrosI[],
    quantCarros: number,
}
 export interface CreateGaragemI {
    nome: string
 }