import React, { Component } from 'react';
import './Form.css'
import axios from 'axios';


export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            product_name: '',
            price: '',
            image_url: '',
            updateHasExecuted: false,
            isEditingMode: false
        };
    }

    componentDidUpdate() {
        const {selectedProduct} = this.props;
        const {isEditingMode, updateHasExecuted} = this.state;
        console.log('ello! selectedProduct', selectedProduct);
        let keyCount = Object.keys(selectedProduct).length;
        if(keyCount > 0 && !updateHasExecuted) {
            this.setState({
                product_name: selectedProduct.product_name,
                price: selectedProduct.price,
                image_url: selectedProduct.image_url,
                isEditingMode: true,
                updateHasExecuted: true
            });
        }
    }

    addProduct(){

        axios.post('http://localhost:4000/api/product', {
            product_name: this.state.product_name,
            price: this.state.price,
            image_url: this.state.image_url
        })
        this.clearInputs();
    }
    clearInputs = () => {
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

    cancelBtnHandler = () => {
        this.props.updateSelectedProduct({});
        this.setState({product_name: '', price: '', image_url: '', isEditingMode: false});
    }
  

    render() {
        // const product_name = this.state.product_name;
        // const price = this.state.price;
        // const image_url = this.state.image_url;

        const { product_name, price, image_url, isEditingMode } = this.state;

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
                <button onClick={e => this.cancelBtnHandler()}>
                    Cancel
                </button>
                {!isEditingMode && <button onClick={() => this.addProduct()}>
                    Add to Inventory
                </button>}
                {isEditingMode && <button>
                    Save Changes
                </button>}
            </div>
        )
    }
}