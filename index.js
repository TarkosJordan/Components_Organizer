import { Colaborador } from './Colaborador.js'
import { Componente } from './Componente.js' 

let componente1 = new Componente()
let componente2 = new Componente()
let colaborador1 = new Colaborador()

componente1.setNome("CNV-96")
colaborador1.setNome("Tarsis Orsi")
colaborador1.setCargo("Projetista de Testes")

componente1.setResponsavel(colaborador1)

console.log(componente1.getNome())
console.log(colaborador1.getNome())
console.log(colaborador1.getCargo())

console.log(componente1.getResponsavel().getNome())

console.log(Componente.numeroComponentes)