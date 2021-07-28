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

let colaborador1 = new Projetista("Tarsis Orsi", "1084")
listaColaboradores.push(colaborador1)

let colaborador2 = new Apontador("Marlise", "890")
listaColaboradores.push(colaborador2)

let colaborador3 = new Operador("Zero", "0")
listaColaboradores.push(colaborador3)

componente1.setResponsavel(colaborador2)
componente1.setResponsavelTecnico(colaborador1)

console.log(componente1.getResponsavel())
console.log(componente1.getResponsavelTecnico())

console.log(`O numero total de colaboradores é: ${Colaborador.numeroColaboradores}

    Número de Projetistas: ${Projetista.numeroProjetistas}
    Número de Apontadores: ${Apontador.numeroApontadores}
    Número de Operadores: ${Operador.numeroOperadores}
`)

console.log(`O numero total de componentes é: ${Componente.numeroComponentes}

    Número de Fixtures: ${Fixture.numeroFixtures}
    Número de Chicotes: ${Chicote.numeroChicotes}
    Número de Bases: ${Base.numeroBases}
`)

console.log("Lista de Componentes:\n")
escreveComponentes(listaComponentes)

function escreveComponentes(vetorComponentes){
    vetorComponentes.forEach(componente => {
        console.log(componente.getDescricaoComponente())
    });
}