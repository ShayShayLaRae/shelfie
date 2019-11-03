import React, { Component } from 'react';
import './Form.css'


export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            product_name: '',
            price: '',
            image_url: ''
        };
    }

    clearInputs() {
        this.setState({ product_name: '', price: '', image_url: '' })
    }

    productChangeHandler(event) {
        this.setState({product_name: event.target.value})
    }

    priceChangeHandler(event) {
        this.setState({price: event.target.value})
    }

    imageChangeHandler(event) {
        this.setState({image_url: event.target.value})
    }
  

    render() {
        const { product_name, price, image_url } = this.state;
        return (
            <div className='formCont'>Form
                   <input
                    value={product_name}
                    placeholder='product'
                    type='text'
                    onChange={e => this.productChangeHandler(e)}
                />
                <input
                    value={price}
                    placeholder='price'
                    type='text'
                    onChange={e => this.priceChangeHandler(e)}
                />
                <input
                    value={image_url}
                    placeholder='image url'
                    type='text'
                    onChange={e => this.imageChangeHandler(e)}
                />
                <button onClick={event => {
                    this.clearInputs()
                    console.log('state', this.state);
                }}>
                    Cancel
                </button>
                <button>
                    Add to Inventory
                </button>
            </div>
        )
    }
}