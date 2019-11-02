import React, { Component } from 'react';
import './Form.css'


export default class Form extends Component {

    // state= {
    //     product_name: '',
    //     price: 0,
    //     image_url: ''
    // };

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

    // addToInventory() {
    //     this.setState({})
    // }

    render() {
        const { product_name, price, image_url } = this.state;
        return (
            <div className='formCont'>Form
                   <input
                    value={product_name}
                    placeholder='product'
                    type='text'
                    onChange={event => {
                        this.setState({
                            product_name: event.target.value  //variable I want to update : the new value
                        })

                    }
                    }
                />
                <input
                    value={price}
                    placeholder='price'
                    type='text'
                    onChange={event => {
                        this.setState({
                            price: event.target.value
                        })
                    }}
                />
                <input
                    value={image_url}
                    placeholder='image url'
                    type='text'
                    onChange={event => {
                        this.setState({
                            image_url: event.target.value
                        })
                    }}
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