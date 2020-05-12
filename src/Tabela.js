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

const TableBody = props => {
    const linhas = props.processos.map((processo, index) => {
        return (
            <tr key = { index }>
                <td>{processo.orgao}</td>
                <td>{processo.viproc}</td>
                <td>{processo.objeto}</td>
                <td>{processo.valor}</td>
                <td>{processo.fonte_recursos}</td>
                <td>{processo.data_entrada}</td>
                <td>{processo.status}</td>
                <td>{processo.dias}</td>
                <td>{processo.responsavel}</td>
                <td><button onClick = { () => { props.removeProcesso(index) } } >Remover</button></td>
            </tr>
        );
    });

    return(
        <tbody>
            {linhas}
        </tbody>
    );
}


class Tabela extends Component {
    render(){

        const { processos, removeProcesso } = this.props;

        return(
            <table>
                <TableHead />
                <TableBody processos = { processos }  removeProcesso = { removeProcesso } />
            </table>
        );
    }
}

export default Tabela;