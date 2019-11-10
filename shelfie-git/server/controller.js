

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
        // const {product_name, price, image_url} = req.body
        db.add_product(req.body)
        .then(result => {
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
    },
    editProduct (req, rem) {
        const db = req.app.get ('db');
        const {id} = req.params;
        db.edit_product(req.body).then(shelfie =>
            res.status(200).send(shelfie))
    }

}