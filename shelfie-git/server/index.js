require ('dotenv').config();
const express = require('express');
const ctrl = require('./controller');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/inventory', ctrl.addProduct)
app.get('/api/inventory', ctrl.getProducts)
// app.put('/api/inventory/:id', ctrl.put)
app.delete('/api/inventory/:id', ctrl.deleteProduct)

massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    console.log('Database connected');

    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} Its ALIVE!`));
})

