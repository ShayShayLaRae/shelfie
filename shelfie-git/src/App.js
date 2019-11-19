import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import { Switch, Hashrouter, Route } from 'react-router-dom';





export default class App extends Component {
  constructor() {
    super();
    this.state = {
      //Selected product is empty by default
      //We can check to see if it's being used by counting the number of keys inside of it.
      //How many keys are currently inside of SelectedProduct? none. Correct
      selectedProduct: {}
    };
  }

  //Let's say the edit button has been clicked, and this function is called.
  //After this function is finished, how many keys are inside of "selectedProduct"? 1
  //No - how many keys are in a product object?  3.  Fouroh right id. so 4
  updateSelectedProduct = (productObj) => {
    this.setState({ selectedProduct: productObj }, () => {
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='content'>
          <Switch>
            <Route exact path='/' component={() => (
              <Dashboard updateSelectedonDash={this.updateSelectedProduct} />
            )} />
            <Route path='/add' component={() => (
              <Form selectedProduct={this.state.selectedProduct}
                updateSelectedProduct={this.updateSelectedProduct} />
            )} />
            <Route path='/edit/:id' component={() => (
              <Form selectedProduct={this.state.selectedProduct}
                updateSelectedProduct={this.updateSelectedProduct} />
            )} />
          </Switch>
        </div>

      </div>
    );
  }
}

