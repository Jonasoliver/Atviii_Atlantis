import Principal from "../processos/principal";
import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem"
import { TipoDocumento } from "../enumeracoes/TipoDocumento"
import Cliente from "../modelos/cliente"
import Documento from "../modelos/documento"
import Endereco from "../modelos/endereco"
import Telefone from "../modelos/telefone"
import CadastroAcomodacoes from "../processos/cadastro/cadastroAcomodacoes";

console.clear()
console.log(`Bem-vindo(a) ao melhor sistema de gestão de clubes, hotéis e resorts do mundo, o Atlantis :)`);

let processo: Processo
let execucao: Boolean = true

processo = new CadastroAcomodacoes()
processo.processar()

let armazem = Armazem.InstanciaUnica
let clienteTeste = new Cliente("Jonas Miguel", "Jonas", new Date(2003, 12, 29))

let telefone = new Telefone("12", "40028922")
clienteTeste.setTelefones([telefone])

let documento = new Documento("456", TipoDocumento.Passaporte, new Date())
clienteTeste.setDocumentos([documento])

let endereco = new Endereco("algum0","algum1","algum2","algum3","algum4","13142351")
clienteTeste.setEndereco(endereco)

let dependenteTeste = new Cliente("Dependente Teste", "Dependente", new Date())
dependenteTeste.setTitular(clienteTeste)
clienteTeste.addDependente(dependenteTeste)

telefone = new Telefone("12", "4002-8922")
dependenteTeste.setTelefones([telefone])

documento = new Documento("123", TipoDocumento.Passaporte, new Date())
dependenteTeste.setDocumentos([documento])

endereco = new Endereco("algum00","algum01","algum02","algum03","algum04","13142352")
dependenteTeste.setEndereco(endereco)

armazem.Clientes.push(clienteTeste)
armazem.Clientes.push(dependenteTeste)
while (execucao) {
    processo = new Principal()
    processo.processar()
    execucao = processo.Execucao
}