import React, {Component} from 'react';
import Product from '../Product/Product';
import './Dashboard.css';
import axios from 'axios';

export default class Dashboard extends Component {

    //How would I use "Dashboard" as a variable inside of itself??? you would use "this"
    //The term "this" refers to the parent object as a variable

    constructor(){
        super()
        this.state={productList:[]}
    }

    componentDidMount() {
        this.getInventory();
    }

    getInventory() {
       let dashboardThis = this;
        //All HTTP requests provide a Promise which must be resolved using "then"
        axios.get('http://localhost:4000/api/inventory') 
        .then(response => { //"then" has its own scope! Using "this" will refer to "then", not "Dashboard"
            dashboardThis.setState({productList: response.data})
            console.log('state', dashboardThis.state);
        });
    }
ß
    render(){
        return(
            <div className='dashCont'>
                {this.state.productList.map(p => 
                <Product key={p.id} product={p} />
                )}
               
            </div>
        )
    }
}