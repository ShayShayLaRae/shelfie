

module.exports= {

    getProducts(req, res) {
        const db = req.app.get('db')
        db.get_products()
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
        })
    },

    addProduct(req, res) {
        const db = req.app.get('db')
        const {product_name, price, image_url} = req.body
        db.add_product({
            product_name: product_name,
            price: price,
            image_url: image_url
        }).then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
            
        })
    },

    deleteProduct(req, res) {
        const db = req.app.get('db')
        db.delete_from_shelf(req.params.id)
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err);
            
        })
    }

}