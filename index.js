const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());

const categories = require('./data/categorie.json');


app.get('/', (req, res) => {
    res.send('API Running')
})

app.get('/course-categories', (req, res) => {
    res.send(categories)
})


app.listen(port, () => {
    console.log('Server is running on port ', port)
})