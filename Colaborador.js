export class Colaborador{
    static numeroColaboradores = 0
    constructor(nome, numeroCracha){
        Colaborador.numeroColaboradores++
        this.nome = nome
        this.numeroCracha = numeroCracha
        this.cargo = ""
        this.privilegio = ""
        this.setor = ""
    }

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