import React, { Component, Fragment } from 'react';
import './App.css';
import Tabela from './Tabela';
import Formulario from './Formulario';

class App extends Component {

  state = {
    processos: [
      {
        orgao: "SEPLAG",
        viproc: "01020304/2020",
        objeto: "Aquisição de 100 microcomputadores",
        valor: "400.000,00",
        fonte_recursos: "Tesouro Estadual",
        data_entrada: "12/03/2020",
        status: "Em análise",
        dias: "13",
        responsavel: "Kennedy Ribeiro",
      },
      {
        orgao: "SCIDADES",
        viproc: "03040504/2020",
        objeto: "Locação de impressoras",
        valor: "1.400.000,00",
        fonte_recursos: "Banco Mundial",
        data_entrada: "14/03/2020",
        status: "Etice",
        dias: "3",
        responsavel: "Igor Rebouças",
      },
      {
        orgao: "SEFAZ",
        viproc: "02320304/2020",
        objeto: "Aquisição de solução de backup",
        valor: "4.000.000,00",
        fonte_recursos: "Profisco II - BID",
        data_entrada: "14/04/2020",
        status: "Sexec",
        dias: "4",
        responsavel: "Camila Linhares",
      },
    ],
  };

  removeProcesso = index => {
    const { processos } = this.state;

    this.setState(
      {
        processos: processos.filter((processo, posAtual) => {
          //console.log(index, posAtual);
          return posAtual !== index;
        }),
      }
    );
  }

  escutadorDeSubmit = processo => {
    this.setState({ processos:[...this.state.processos, processo] })
  }

  render() {
    return (
      <Fragment>
        <Tabela processos={this.state.processos} removeProcesso={this.removeProcesso} />
        <Formulario escutadorDeSubmit={ this.escutadorDeSubmit } />
      </Fragment>
    );
  }

}

export default App;
