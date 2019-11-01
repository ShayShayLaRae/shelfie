import React, {Component} from 'react';


export default class Product extends Component {
    // constructor(){
    //     super()
    // }
    render(){
        return(
            <div>Product
                <input placeholder='product' type='text' onChange={e => this.props.addProducts(e.target.value)}/>
                <input placeholder='price'/>
                <input placeholder='image url'/>
                <button>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}