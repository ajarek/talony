const express =require('express')
const mongoose=require('mongoose')

const {port,database}=require('./config')

const app = express()
//databasa
mongoose.connect(database,()=>{
    console.log("Connecting to Database")
})

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')
//routes

app.use(require('./routes/composeRegister'))
app.use(require('./routes/register'))
app.use(require('./routes/edit'))


app.listen(port, () => {
    console.log('Server started listening:'+ port);
})