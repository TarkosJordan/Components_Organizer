import { Colaborador } from './Colaborador.js'

export class Operador extends Colaborador{
    static numeroOperadores = 0
    constructor(nome, numeroCracha){
        super(nome, numeroCracha)
        Operador.numeroOperadores++
        this.privilegio = 1
    }
}