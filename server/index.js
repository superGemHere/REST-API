const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const corsOptions = require('./corsPolicy');
const {CONNECTION__DB, CLIENT__PORT} =  require('./constants')

const routes = require('./routes');

const app = express();

//Here you are restricted to my CORS policy.  If you want a different one, change the variable or leave it with empty argument field for default behaviour.
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get('/', (req, res) => {
    // console.log(corsOptions)
    res.send('Hello REST API')
});

app.use(routes);
mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION__DB);



app.listen(CLIENT__PORT, () => console.log('Server is listening on port: 3030...'));