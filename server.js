let express=require('express')
let bodyParser = require('body-parser')
let app=express()

//template
app.set('view engine','ejs')


//middleware
const time=(req,res,next)=>
{
     req = new Date().toString()
     console.log('is runig at '+req )
    next()
}

app.use(time)
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



app.listen(3000)