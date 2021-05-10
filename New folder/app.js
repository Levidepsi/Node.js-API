const express = require('express');
const path = require('path')
const PORT = 4000
const router = require('./router')
const app = express();


// static file
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/img',express.static(__dirname + 'public/img'))

app.set('views','./views');
app.set('view engine', 'ejs')

// render
app.get('', (req, res) =>{
    res.render('index')
})

app.use(router)

app.listen(PORT, () => console.log(`Listening to port${PORT}`)); 

 