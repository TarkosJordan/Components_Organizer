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
    setNome(nome){
        this.nome = nome
    }
    setRevisao(revisao){
        this.revisao = revisao
    }
    setResponsavel(responsavel){
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
}