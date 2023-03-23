const express = require('express')
const morgan = require('morgan')
const ejs = require('ejs')
const path = require('path')
const bodyparser = require('body-parser')
const app = express() 
const port = 2000

//MIDDLEWARES
//app.use(morgan(dev));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static('/public'));
app.set("view engine", "ejs");

app.post('/', (req, res) => {
  res.render('petit', req.body);
A});

aqqz<ºpp.get('/a', (req, res) => {
  res.render("petit", { name: 'Tu Nombre', title: 'Título de la Página', age: 31 })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})