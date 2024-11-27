import Acomodacao from "./acomodacao";
import Cliente from "./cliente";

export default class Hospedagem {
    static ultimoId: number = 0
    public id: number
    private acomodacao: Acomodacao
    private clientes: Cliente[]
    private dataInicio: Date
    private dataFinal: Date

    constructor(acomodacao:Acomodacao, clientes: Cliente[], dataInicio: Date, dataFinal: Date){
        Hospedagem.ultimoId++;
        this.id = Hospedagem.ultimoId
        this.acomodacao = acomodacao
        this.clientes = clientes
        this.dataInicio = dataInicio
        this.dataFinal = dataFinal
    }

    public get Acomodacao(){ return this.acomodacao }
    public get Clientes(){ return this.clientes }
    public get DataInicio(){ return this.dataInicio }
    public get DataFinal(){ return this.dataFinal }

    public setAcomodacao(acomodacao:Acomodacao) { this.acomodacao = acomodacao }
    public setClientes(clientes:Cliente[]) { this.clientes = clientes }
    public setDataInicio(dataInicio: Date) { this.dataInicio = dataInicio }
    public setDataFinal(dataFinal: Date) { this.dataFinal = dataFinal }

    public addCliente(cliente:Cliente) { this.clientes.push(cliente) }
}