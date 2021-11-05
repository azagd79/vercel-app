const express = require('express');
const app = express();


app.set('port',3000);


app.set('view engine','hbs');
app.use('/resources',express.static('public'));
app.use('/resources',express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
   res.render('index');
})


app.get('/next',(req,res)=>{
   res.render('next');
})

app.listen(app.get('port'),()=>{
 console.log(`server in port ${app.get('port')}`);   
});