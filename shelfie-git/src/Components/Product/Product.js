import React, {Component} from 'react';
import './Product.css';


export default class Product extends Component {
    // constructor(){
    //     super()
    // }
    render(){
        const {product} = this.props;
        const {product_name, price, image_url} = product;
        return(
            <div key={product_name}className='productCont'>
             {product_name}
            </div>
        )
    }
}