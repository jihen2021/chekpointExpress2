let express=require('express')
let bodyParser = require('body-parser')
let app=express()
app.use(express.json())//body parser
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

//middleware
  // middle ware pour la gestion de tepm de req

  const time=(req,res,next)=>
  {
      req = new Date().getDay()
      rev= new Date().getHours()
      if (rev<9 || rev>17 ||req===1||req===7) {
      //send file path absolute
        res.send(
  
        '<h1> The web application is only available during working :Monday to friday from 9 to 17 <h1>'
        )
      } 
      else{ 
        
           next() }
  }
  
  app.use(time)
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
    res.render('pages/contact')
})




app.listen(3000)