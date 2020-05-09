import React from 'react';
import './App.css';
import Tabela from './Tabela';

function App() {

  const processos = [
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
    }
  ];

  return (
    <Tabela processos = { processos }/>
  );
}

export default App;
