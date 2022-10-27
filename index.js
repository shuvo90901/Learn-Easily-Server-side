const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());

const categories = require('./data/categorie.json');

const course = require('./data/course.json')


app.get('/', (req, res) => {
    res.send('API Running')
})

app.get('/course-categories', (req, res) => {
    res.send(categories)
});

app.get('/course', (req, res) => {
    res.send(course)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const single_course = course.find(n => n.id === id);
    res.send(single_course)
})


app.listen(port, () => {
    console.log('Server is running on port ', port)
})