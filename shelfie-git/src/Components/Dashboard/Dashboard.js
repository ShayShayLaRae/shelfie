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
        this.getProductList()
    }

    getProductList=() => {
        axios
        .get('http://localhost:4000/api/inventory')
        .then(results => {

            this.setState({
                productList: results.data
            });
        });
    }

    deleteProduct=(id) => {
        let parentThis= this
        axios.delete(`http://localhost:4000/api/inventory/${id}`)
        .then(result => {
            parentThis.getProductList()
        })
    }


    render(){
        const {updateSelectedonDash} = this.props;
        return(
            <div className='dashCont'>
                {this.state.productList.map(p => 
                <Product 
                key={p.id} 
                product={p} 
                deleteProduct={this.deleteProduct}
                updateSelectedonProd={updateSelectedonDash}
                />
                )}
               
            </div>
        )
    }
}