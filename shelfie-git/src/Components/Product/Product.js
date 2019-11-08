import React, {Component} from 'react';
import './Product.css';


export default class Product extends Component {
    // constructor(){
    //     super()
    // }
    render(){
        const {product} = this.props;
        const {product_name, price, image_url} = product;
        console.log(product);
        
        return(
            <div className='productCont'>
             <img src={image_url} alt='product' className='image' />
             <div className='name'>{product_name}</div>
             <div className='price'>{price}</div>
            </div>
        )
    }
}