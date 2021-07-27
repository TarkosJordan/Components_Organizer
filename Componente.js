export class Componente{

    constructor(){
        Componente.numeroComponentes++
    }
    static numeroComponentes = 0
    tipo
    nome
    revisao = "0"
    responsavel
    status
    
    setTipo(tipo){
        this.tipo = tipo
    } 
    setNome(nome){
        this.nome = nome
    }
    setRevisao(revisao){
        this.revisao = revisao
    }
    setResponsavel(responsavel){
        this.responsavel = responsavel
    }
    getTipo(){
        return this.tipo
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
}