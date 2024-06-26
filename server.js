const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers');

const port=process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials', (err)=>{});
app.set('view engine', 'hbs');

app.get('/',(req, res)=> {

    res.render('home',{
        nombre: 'rolando'
    });

});

app.get('/about',(req, res)=> {
     res.render('about');
    });
    

app.listen(port, ()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
});