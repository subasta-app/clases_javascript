const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const db = require('./queries')

const app = express()
const port = 3000

app.use(cors({
    origin: 'http://127.0.0.1:5501'
}));

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//crear un proyecto npm
//npm init
//instalar express
//npm install express
//instalar nodemon
//npm install nodemon


//instalar dependencias
//npm install

//como instalar postgres
//windows
//https://www.youtube.com/watch?v=cHGaDfzJyY4
//mac
//https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-ruby-on-rails-application-on-macos


let cars = [
    {id:1,name:'subaru',image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/subaru-wrx-sti-type-r-subasta-1640893491.jpg'},
    {id:2,name:'mazda',image:'https://static.cargurus.com/images/forsale/2023/01/07/18/13/2010_mazda_rx-8-pic-1794905484197138408-1024x768.jpeg'},
    {id:3,name:'nissan',image:'https://www.motor.com.co/__export/1661808803760/sites/motor/img/2022/08/29/01-nis_1.jpg_1041009690.jpg'},
    {id:4,name:'honda',image:'https://scontent.fbog2-4.fna.fbcdn.net/v/t1.6435-9/64781161_10157291663767902_8629806332481896448_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=a8_IfLDW5j4AX9U-iyh&_nc_ht=scontent.fbog2-4.fna&oh=00_AfBHZD4SSKEGMLFK5coE2AJHnexIsOy9E46IxMx564g_RA&oe=63FBD681'}
];

app.get('/', (req, res) => {
  res.send('Hola Mundo esto es Colombia XXX')
})

app.get('/users', db.getUsers)
app.post('/users', db.createUser)

app.get('/healt', (req, res) => {
    res.json({status: "Alive!"})
})

app.get('/cars', (req, res) => {
    res.json({data: cars})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})