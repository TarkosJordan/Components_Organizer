import { Componente } from './Componente.js' 

export class Fixture extends Componente{
    static numeroFixtures = 0

    constructor(nome, revisao){
        super(nome, revisao)
        Fixture.numeroFixtures++
    }
}