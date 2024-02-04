const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello REST API')
})



app.listen(3030, () => console.log('Server is listening on port: 3030...'));