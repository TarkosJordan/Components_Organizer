import { Colaborador } from "./Colaborador.js";

export class Projetista extends Colaborador{
    static numeroProjetistas = 0
    constructor(nome, numeroCracha){
        super(nome, numeroCracha)
        Projetista.numeroProjetistas++
        this.privilegio = 3
    }
}