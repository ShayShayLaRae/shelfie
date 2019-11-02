import React, {Component} from 'react';
import Product from '../Product/Product';
import './Dashboard.css';



export default class Dashboard extends Component {
    // constructor(){
    //     super()
    // }
    render(){
        return(
            <div className='dashCont'>Dashboard
                <Product />
            </div>
        )
    }
}