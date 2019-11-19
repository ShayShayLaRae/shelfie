

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

    get1(req, res) {
        const db = req.app.get('db')
        db.get_1()
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
        })
    },
    

    addProduct(req, res) {
        const db = req.app.get('db')
        const {product_name, price, image_url} = req.body
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
    editProduct (req, res) {
        const {product_name, price, image_url} = req.body
        const db = req.app.get ('db');
        const {id} = req.params;
        db.edit_product({id, product_name, price, image_url}).then(shelfie =>
            res.status(200).send(shelfie))
    }

}