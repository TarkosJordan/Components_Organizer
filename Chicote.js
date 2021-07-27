import { Componente } from './Componente.js' 

export class Chicote extends Componente{
    static numeroChicotes = 0

    constructor(nome, revisao){
        super(nome, revisao)
        Chicote.numeroChicotes++
    }
}