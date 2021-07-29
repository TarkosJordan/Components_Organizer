import { Colaborador } from "./Colaborador.js";

export class Apontador extends Colaborador{
    static numeroApontadores = 0
    constructor(nome, numeroCracha){
        super(nome, numeroCracha)
        Apontador.numeroApontadores++
        this.privilegio = 2
    }
}