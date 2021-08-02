/**
 * Polimorfismo entre classes "Interfaces"
 * Ser um objeto autenticavel significa implementar dentro de sua classe a função autenticar que recebe uma senha e retorna um booleano
 * Técnica utilizada para compartilhar comportamento entre classes disitintas na qual o sistema de hierarquia de classes não parece adequado
 */
export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha) 
        } else{
            return false
        }
    }
    /**
     * Método testa se objeto passado como parametro possui em sua definição de classe um campo autenticar e se esse campo autenticar representa
     * uma função dentro do contexto da classe que define esse objeto
     */
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}