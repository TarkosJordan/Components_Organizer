import { Componente } from './Componente.js' 

export class Base extends Componente{
    static numeroBases = 0
    
    constructor(nome, revisao){
        super(nome, revisao)
        Base.numeroBases++
    }
}