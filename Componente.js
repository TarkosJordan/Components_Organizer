import { Colaborador } from './Colaborador.js'
import { Projetista } from './Projetista.js'

export class Componente{

    static numeroComponentes = 0
    constructor(nome, revisao){
        Componente.numeroComponentes++
        this.nome = nome
        this.revisao = revisao
        this.responsavel = {}
        this.responsavelTecnico = {}
        this.status = ""
        this.setorPertencente = ""
        this.idComponente = ""
        this.incremental = 1
        this.descricaoComponente = "" 
    }
    defineIncremental(vetorComponentes){
        let contaComponentes = 0
        vetorComponentes.forEach(componente => {
            if(componente.getNome() == this.nome){
                contaComponentes++
            }
            this.incremental = contaComponentes
        });
    }
    defineDescricaoComponente(){
        this.descricaoComponente = `${this.nome}.${this.incremental};REV${this.revisao}`
    }

    // Acessores de atributos
    setNome(nome){
        this.nome = nome
    }
    getNome(){
        return this.nome
    }
    setRevisao(revisao){
        this.revisao = revisao
    }
    getRevisao(){
        return this.revisao
    }
    setResponsavel(responsavel){
        if(responsavel instanceof Colaborador){
            this.responsavel = responsavel
        }
    }
    getResponsavel(){
        return this.responsavel
    }
    setResponsavelTecnico(responsavelTecnico){
        if(responsavelTecnico instanceof Projetista){
            this.responsavelTecnico = responsavelTecnico
        }
    }
    getResponsavelTecnico(){
        return this.responsavelTecnico
    }
    setStatus(status){
        this.status = status
    }
    getStatus(){
        return this.status
    }
    setSetorPertencente(setorPertencente){
        this.setorPertencente = setorPertencente
    }
    getSetorPertencente(){
        return this.setorPertencente
    }
    setIdComponente(idComponente){
        this.idComponente = idComponente
    }
    getIdComponente(){
        return this.idComponente
    }
    getDescricaoComponente(){
        return this.descricaoComponente
    }
    //end region
}