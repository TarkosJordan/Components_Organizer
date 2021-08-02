/**
 * Polimorfismo entre classes "Interfaces"
 * Ser um objeto autenticavel significa implementar dentro de sua classe a função autenticar que recebe uma senha e retorna um booleano
 * Técnica utilizada para compartilhar comportamento entre classes disitintas na qual o sistema de hierarquia de classes não parece adequado
 */
export class SistemaAutenticacao{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha) 
    }
}