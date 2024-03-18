import "./App.css";
import { useReducer } from "react";

const MeuBotao = (props:any) => {
  return <button>{props.titulo}</button>;
}

const Usuario = (props:any) => {
  return <h1>{props.nome}</h1>;
}

/* const ListaDeTarefas = (props:any) => {
  return (
    <>
      <h4>Lista de Tarefas</h4>
      <ul>
        {
         props.dados.map((item) => 
          return <ItemTarefa key={item.id} titulo={item.titulo} />
        }
      </ul>
    </>
  )
}

const ItemTarefa = (props:any) => {
  return (<li>{titulo}</li>)
}*/

const App = () => {
  let usuario = {nome: "Gabras"};
  const tarefas = [
    "Tarefa 1",
    "Tarefa 2"
  ];
  const tarefasNoMundoReal = [
    {
      id: 1,
      titulo: "Criar Coisas",
      concluido: false
    },
    {
      id: 2,
      titulo: "Criar outras Coisas",
      concluido: true
    }
  ]
  return (
    <div>
      <h1>Bem vindo ao mundo React</h1>
      {
        usuario ?
          (<Usuario nome={usuario.nome} />) :
          (<MeuBotao titulo="Login" />)
      }
      {/*{
        !usuario && (<MeuBotao titulo="Login" />)
      }*/}
      <MeuBotao titulo="botao legal" />
      <MeuBotao titulo="botao maneiro" />
      <MeuBotao titulo="botao interessante" />
      <h4>Tarefas lista de strings</h4>
      <ul>
        {
          tarefas.map((item, indice) => {return (<li key={indice}>{item}</li>)})
        }
      </ul>
      {/* <ListaDeTarefas dados={tarefasNoMundoReal} /> */}
    </div>
  );
}

export default App;
