import { Colaborador } from './Colaborador.js'
import { Componente } from './Componente.js' 

let vetorComponentes = new Array()

let componente1 = new Componente("CNV-96", 0)
vetorComponentes.push(componente1)
componente1.defineIncremental(vetorComponentes)

let componente2 = new Componente("CNV-96", 0)
vetorComponentes.push(componente2)
componente2.defineIncremental(vetorComponentes)

let componente3 = new Componente("CNV-96", 0)
vetorComponentes.push(componente3)
componente3.defineIncremental(vetorComponentes)

let colaborador1 = new Colaborador()

colaborador1.setNome("Tarsis Orsi")
colaborador1.setCargo("Projetista de Testes")

console.log(componente1.incremental)
console.log(componente2.incremental)
console.log(componente3.incremental)

componente1.setResponsavel(colaborador1)

console.log(componente1.getNome())
console.log(colaborador1.getNome())
console.log(colaborador1.getCargo())
1
console.log(componente1.getResponsavel().getNome())

console.log(Componente.numeroComponentes)