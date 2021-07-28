import { Colaborador } from './Colaborador.js'
import { Componente } from './Componente.js' 
import { Chicote } from './Chicote.js'
import { Fixture } from './Fixture.js'
import { Base } from './Base.js'

let vetorComponentes = new Array()

let componente1 = new Chicote("CNV-96", 0)
vetorComponentes.push(componente1)
componente1.defineIncremental(vetorComponentes)
componente1.defineDescricaoComponente()

let componente2 = new Chicote("CNV-96", 0)
vetorComponentes.push(componente2)
componente2.defineIncremental(vetorComponentes)
componente2.defineDescricaoComponente()

let componente3 = new Chicote("CNV-96", 0)
vetorComponentes.push(componente3)
componente3.defineIncremental(vetorComponentes)
componente3.defineDescricaoComponente()

let componente4 = new Fixture("FX-08", 0)
vetorComponentes.push(componente4)
componente4.defineIncremental(vetorComponentes)
componente4.defineDescricaoComponente()

let colaborador1 = new Colaborador("Tarsis Orsi", "1084")

console.log(componente1.incremental)
console.log(componente2.incremental)
console.log(componente3.incremental)

//componente1.setResponsavel(colaborador1)
componente1.setResponsavel("tarsis")

console.log(componente1.getNome())
console.log(colaborador1.getNome())

console.log(componente1.getResponsavel())

console.log(Componente.numeroComponentes)

escreveComponentes(vetorComponentes)

function escreveComponentes(vetorComponentes){
    vetorComponentes.forEach(componente => {
        console.log(componente.getDescricaoComponente())
    });
}