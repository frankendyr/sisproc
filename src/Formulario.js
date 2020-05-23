import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.stateInicial = {
            orgao: '',
            viproc: '',
            objeto: '',
            valor: '',
            fonte_recursos: '',
            data_entrada: '',
            status: '',
            dias: '',
            responsavel: '',
        }

        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
    }


    render() {

        const { orgao, viproc, objeto, valor, fonte_recursos, data_entrada, status, dias, responsavel } = this.state;

        return (
            <form>
                <label htmlFor="orgao">Órgão</label>
                <input
                    id="orgao"
                    type="text"
                    name="orgao"
                    value={orgao}
                    onChange={this.escutadorDeInput} />

                <label htmlFor="viproc">Viproc</label>
                <input
                    id="viproc"
                    type="text"
                    name="viproc"
                    value={viproc}
                    onChange={this.escutadorDeInput} />


                <label htmlFor="objeto">Objeto</label>
                <input
                    id="objeto"
                    type="text"
                    name="objeto"
                    value={objeto}
                    onChange={this.escutadorDeInput} />

                <label htmlFor="valor">Valor</label>
                <input
                    id="valor"
                    type="text"
                    name="valor"
                    value={valor}
                    onChange={this.escutadorDeInput} />

                <label htmlFor="fonte_recursos">Fonte de Recursos</label>
                <input
                    id="fonte_recursos"
                    type="text"
                    name="fonte_recursos"
                    value={fonte_recursos}
                    onChange={this.escutadorDeInput} />


                <label htmlFor="data_entrada">Data de Entrada</label>
                <input
                    id="data_entrada"
                    type="text"
                    name="data_entrada"
                    value={data_entrada}
                    onChange={this.escutadorDeInput} />

                <label htmlFor="status">Status</label>
                <input
                    id="status"
                    type="text"
                    name="status"
                    value={status}
                    onChange={this.escutadorDeInput} />

                <label htmlFor="dias">Dias</label>
                <input
                    id="dias"
                    type="text"
                    name="dias"
                    value={dias}
                    onChange={this.escutadorDeInput} />


                <label htmlFor="responsavel">Responsável</label>
                <input
                    id="responsavel"
                    type="text"
                    name="responsavel"
                    value={responsavel}
                    onChange={this.escutadorDeInput} />

                <button onClick={this.submitFormulario} type="button">Salvar</button>
            </form>
        );
    }
}

export default Formulario;