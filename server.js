let express=require('express')
let bodyParser = require('body-parser')
let app=express()

//template
app.set('view engine','ejs')

//route static
//app.use(express.static(__dirname,'public','views','pages'))
//route 

app.get('/',(req,res)=>
{
    //res.send('salut') pas de ejs
    res.render('pages/index')
})
app.get('/contact',(req,res)=>
{
    //res.send('salut') pas de ejs
    res.render('pages/contact')
})

app.get('/ourService',(req,res)=>
{
    //res.send('salut') pas de ejs
    res.render('pages/ourService',{test :'salut'})
})
// post contact
app.post('/pages/contact',(req,res)=>
{
// poster un message

})
  // middle ware pour la gestion de tepm de req

app.get('/now',(req,res,next)=>
{
    req.time = new Date().toString()
    next()

},(req,res)=>{
    //return
  res.json({'time': req.time})
})

app.listen(3000)