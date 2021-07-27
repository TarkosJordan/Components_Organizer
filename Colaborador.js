export class Colaborador{
    constructor(){
        Colaborador.numeroColaboradores++
    }
    static numeroColaboradores = 0
    nome
    numeroCracha
    cargo
    privilegio
    setor

    setNome(nome){
        this.nome = nome
    }
    getNome(){
        return this.nome
    }
    setNumeroCracha(numeroCracha){
        this.numeroCracha = numeroCracha
    }
    getNumeroCracha(){
        return this.numeroCracha
    }
    setCargo(cargo){
        this.cargo = cargo
    }
    getCargo(){
        return this.cargo
    }
    setPrivilegio(privilegio){
        this.privilegio = privilegio
    }
    getPrivilegio(){
        return this.privilegio
    }
    setSetor(setor){
        this.setor = setor 
    }
    getSetor(){
        return this.setor
    }
}