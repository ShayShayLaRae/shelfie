import React, {Component} from 'react';
import './Product.css';


export default class Product extends Component {
    // constructor(){
    //     super()
    // }
    render(){
        const {product, deleteProduct, updateSelectedonProd} = this.props;
        const {id, product_name, price, image_url} = product;
        
        return(
            <div className='productCont'>
             <img src={image_url} alt='product' className='image' />
             <div className='name'>{product_name}</div>
             <div className='price'>{price}</div>
             <button onClick={() => updateSelectedonProd(product)}>
                Edit
             </button>
             <button onClick={() => deleteProduct(id)}>
                Delete
             </button>
            </div>
        )
    }
}