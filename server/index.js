const express = require('express');

const routes = require('./routes')

const app = express();

app.get('/', (req, res) => {
    res.send('Hello REST API')
});

app.use(routes);

app.listen(3030, () => console.log('Server is listening on port: 3030...'));