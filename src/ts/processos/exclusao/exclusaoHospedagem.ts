import Processo from "../../abstracoes/processo";
import BuscarClientePorDocumento from "../../buscas/buscarClientePorDocumento";
import BuscarHospedagensPorCliente from "../../buscas/buscarHospPorCliente";
import Armazem from "../../dominio/armazem";
import ImpressorHospedagem from "../../impressores/impressorHospedagem";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import Hospedagem from "../../modelos/hospedagem";

export default class ExclusaoHospedagem extends Processo {
    private clientes: Cliente[];
    private impressor!: Impressor;
    private hospedagens: Hospedagem[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
        this.hospedagens = Armazem.InstanciaUnica.Hospedagens;
    }

    processar(): void {
        console.log('Iniciando o processo de exclusão de hospedagens...');

        const documento = this.entrada.receberTexto('Insira o número do documento do cliente:');

        const cliente = BuscarClientePorDocumento(this.clientes, documento);
        if (cliente === null) {
            console.log('Cliente não encontrado.');
            return;
        }

        const hospedagens = BuscarHospedagensPorCliente(cliente);
        if (hospedagens.length === 0) {
            console.log('Nenhuma hospedagem encontrada para este cliente.');
            return;
        }

        hospedagens.forEach(hospedagem => {
            this.impressor = new ImpressorHospedagem(hospedagem);
            console.log(this.impressor.imprimir());

            const excluir = this.entrada.receberTexto('Deseja excluir esta hospedagem? (S/N):').toUpperCase();
            if (excluir === 'S') {
                const index = this.hospedagens.findIndex(hosp => hosp.id === hospedagem.id);
                if (index !== -1) {
                    this.hospedagens.splice(index, 1);
                    console.log('Hospedagem excluída com sucesso.');
                } else {
                    console.log('Erro ao excluir hospedagem: hospedagem não encontrada.');
                }
            }
        });

        // Atualizar o armazém após a exclusão
        Armazem.InstanciaUnica.setHospedagens(this.hospedagens)
    }
}
