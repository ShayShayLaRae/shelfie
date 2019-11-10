import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';





export default class App extends Component {
constructor() {
  super();
  this.state = {
    selectedProduct: {}
  };
}

updateSelectedProduct = (productObj) => {
  this.setState({selectedProduct: productObj}, ()=>{
  });
}
  
 render() {
  return (
    <div className="App">

      <Header />
     
      <div className='content'>
      <Dashboard updateSelectedonDash={this.updateSelectedProduct}/>
      <Form selectedProduct={this.state.selectedProduct} 
      updateSelectedProduct={this.updateSelectedProduct}/>
      </div>
      
    </div>
  );
 }
}

