require ('dotenv').config();
const express = require('express');
const ctrl = require('../server/controller');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express();
app.use(express.json());

// app.post('/api/inventory', ctrl.post)
app.get('/api/inventory', ctrl.get)
// app.put('/api/inventory/:id', ctrl.put)
// app.delete('/api/inventory/:id', ctrl.delete)

massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    console.log('Database connected');

    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} Its ALIVE!`));
})

