import { Colaborador } from './Colaborador.js'
import { Componente } from './Componente.js' 
import { Chicote } from './Chicote.js'
import { Fixture } from './Fixture.js'
import { Base } from './Base.js'
import { Projetista } from './Projetista.js'
import { Apontador } from './Apontador.js'
import { Operador } from './Operador.js'
 
let listaComponentes = new Array()
let listaColaboradores = new Array()

let componente1 = new Chicote("CNV-96", 0)
listaComponentes.push(componente1)
componente1.defineIncremental(listaComponentes)
componente1.defineDescricaoComponente()

let componente2 = new Chicote("CNV-96", 0)
listaComponentes.push(componente2)
componente2.defineIncremental(listaComponentes)
componente2.defineDescricaoComponente()

let componente3 = new Chicote("CNV-96", 0)
listaComponentes.push(componente3)
componente3.defineIncremental(listaComponentes)
componente3.defineDescricaoComponente()

let componente4 = new Fixture("FX-08", 0)
listaComponentes.push(componente4)
componente4.defineIncremental(listaComponentes)
componente4.defineDescricaoComponente()

let colaborador1 = new Colaborador("Tarsis Orsi", "1084")
listaColaboradores.push(colaborador1)

con1sole.log(componente1.incremental)
console.log(componente2.incremental)
console.log(componente3.incremental)

componente1.setResponsavel(colaborador1)

console.log(componente1.getNome())
console.log(colaborador1.getNome())

console.log(componente1.getResponsavel())

console.log(Componente.numeroComponentes)

escreveComponentes(listaComponentes)

function escreveComponentes(vetorComponentes){
    vetorComponentes.forEach(componente => {
        console.log(componente.getDescricaoComponente())
    });
}