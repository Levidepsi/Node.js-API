const express = require('express');
const path = require('path')
const PORT = 4000
const router = require('./router')
const app = express();


// static file
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))

app.set('views','./views');
app.set('view engine', 'ejs')

// render
app.get('', (req, res) =>{
    res.render('_headers')
})

app.use(router)

app.listen(PORT, () => console.log(`Listening to port${PORT}`)); 

 