//Classe abstrata
export class Colaborador{
    static numeroColaboradores = 0
    constructor(nome, numeroCracha){
        if(this.constructor == Colaborador){
            throw new Error("Erro, você não pode instaciar um objeto de uma classe abstrata")
        }
        Colaborador.numeroColaboradores++
        this.nome = nome
        this.numeroCracha = numeroCracha
        this.cargo = ""
        this.privilegio = 0
        this.setor = ""
        this.senha
    }
    cadastrarSenha(senha){
        this.senha = senha
    }
    autenticar(senha){
        return senha == this.senha
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