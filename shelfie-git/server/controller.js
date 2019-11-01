

module.exports= {
    addProducts(req, res) {
        const db = req.app.get('db')
        const {product_name, price, image_url} = req.body
        db.add_products({
            product_name: product_name,
            price: price,
            image_url: image_url
        }).then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
            
        })
    },

    deleteProducts(req, res) {
        const db = req.app.get('db')
        db.delete_from_shelfie(req.params.id)
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err);
            
        })
    }

}