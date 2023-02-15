const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const db = require('./queries')
const User = require('./orm')

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

app.get('/', (req, res) => {
  res.send('Hola Mundo esto es Colombia XXX')
})

app.get('/users', db.getUsers)
app.post('/users', db.createUser)

app.post('/usuarios', async (req, res) => {
  console.log('req: ')
  console.log(req.body.data)

    let data = req.body.data
    let id = data.id
    let name = data.name
    let email = data.email
  const usuario = await User.create({
    id: id,
    name: name,
    email: email
  });

  
  console.log('usuario: ')
  console.log(usuario)
  console.log('res: ')
  console.log(res)
  res.send(`el usuario se creo ${id}`)
})



app.get('/healt', (req, res) => {
    res.json({status: "Alive!"})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})