import React, {Component} from 'react';
import './Product.css';
import {Link} from 'react-router-dom';


export default class Product extends Component {
    // constructor(){
    //     super();


    // }
    render(){
        const {product, deleteProduct, updateSelectedonProd} = this.props;
        const {id, product_name, price, image_url} = product;
        
        return(
            <div className='productCont'>
             <img src={image_url} alt='product' className='image' />
             <div className='name'>{product_name}</div>
             <div className='price'>{price}</div>
             <Link to={`/edit/${id}`}>
             <button onClick={() => updateSelectedonProd(product)}>
                Edit
             </button>
             </Link>
             <button onClick={() => deleteProduct(id)}>
                Delete
             </button>
            </div>
        )
    }
}