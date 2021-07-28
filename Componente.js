import { Colaborador } from './Colaborador.js'

export class Componente{

    static numeroComponentes = 0
    constructor(nome, revisao){
        Componente.numeroComponentes++
        this.nome = nome
        this.revisao = revisao
        this.responsavel = ""
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
    setNome(nome){
        this.nome = nome
    }
    setRevisao(revisao){
        this.revisao = revisao
    }
    setResponsavel(responsavel){
        if(responsavel instanceof Colaborador)
            this.responsavel = responsavel
    }
    setStatus(status){
        this.status = status
    }
    setSetorPertencente(setorPertencente){
        this.setorPertencente = setorPertencente
    }
    setIdComponente(idComponente){
        this.idComponente = idComponente
    }
    getNome(){
        return this.nome
    }
    getRevisao(){
        return this.revisao
    }
    getResponsavel(){
        return this.responsavel
    }
    getStatus(){
        return this.status
    }
    getSetorPertencente(){
        return this.setorPertencente
    }
    getIdComponente(){
        return this.idComponente
    }
    getDescricaoComponente(){
        return this.descricaoComponente
    }
}