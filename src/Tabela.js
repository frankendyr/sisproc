import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Órgão</th>
                <th>Nº Viproc</th>
                <th>Objeto</th>
                <th>Valor</th>
                <th>Fonte de Recursos</th>
                <th>Data Entrada</th>
                <th>Status</th>
                <th>Dias</th>
                <th>Responsável</th>
                <th>Atualizar</th>
            </tr>
        </thead>
    );
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>SEPLAG</td>
                <td>01020304/2020</td>
                <td>Aquisição de 100 microcomputadores</td>
                <td>400.000,00</td>
                <td>Tesouro Estadual</td>
                <td>16/03/2020</td>
                <td>Em análise</td>
                <td>13</td>
                <td>Kennedy Ribeiro</td>
                <td><button>Atualizar</button></td>
            </tr>

            <tr>
                <td>SEFAZ</td>
                <td>02010304/2020</td>
                <td>Aquisição de solução de backup</td>
                <td>1.345.543,97</td>
                <td>PROFISCO-BID</td>
                <td>12/02/2020</td>
                <td>Etice</td>
                <td>7</td>
                <td>Camila Linhares</td>
                <td><button>Atualizar</button></td>
            </tr>

            <tr>
                <td>CAGECE</td>
                <td>07060504/2020</td>
                <td>Contratação de serviços de outsourcing de impressão</td>
                <td>350.000,00</td>
                <td>Recursos Próprios</td>
                <td>10/04/2020</td>
                <td>Asjur</td>
                <td>11</td>
                <td>Igor Rebouças</td>
                <td><button>Atualizar</button></td>
            </tr>
        </tbody>
    );
}


class Tabela extends Component {
    render(){

        const { processos } = this.props;
        console.log(processos);

        return(
            <table>
                <TableHead />
                <TableBody />
            </table>
        );
    }
}

export default Tabela;