import React, {Component} from 'react';

class Equipe extends Component{
  render(){
    return(
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} tempo={this.props.tempo}/>
        <hr/>
      </div>
    );
  }
}
class Sobre extends Component {
  render(){
    return(
      <div>
        <h2>Nome: {this.props.nome}</h2>
        <h3>Cargo: {this.props.cargo} </h3>
        <h3>Tempo na empresa: {this.props.tempo} anos</h3>
      </div>
    )
  }
}

function App () {
  return(
    <div>
      <h1>Quadro de Funcionários - Tech Company</h1>
      <Equipe nome="Alana Amaral" cargo="Designer de produto" tempo="3"/>
      <Equipe nome="Caetano Silva" cargo="Desenvolvedor Jr" tempo="2"/>
      <Equipe nome="Samantha Pires" cargo="Desenvolvedora Senior" tempo="4"/>
      <Equipe nome="Rafael Cordeiro" cargo="Gerente de Projetos" tempo="5"/>
    </div>
  );
}

export default App;