const express = require('express');
const cors = require('cors');

const corsOptions = require('./corsPolicy');

const routes = require('./routes');

const app = express();

//Here you are restricted to my CORS policy.  If you want a different one, change the variable or leave it with empty argument field for default behaviour.
app.use(cors(corsOptions))

app.get('/', (req, res) => {
    // console.log(corsOptions)
    res.send('Hello REST API')
});

app.use(routes);

app.listen(3030, () => console.log('Server is listening on port: 3030...'));