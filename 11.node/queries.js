
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'jcespitia',
  host: 'localhost',
  database: 'sample_test',
  password: process.env.PASSWORD,
  port: 5432,
})


const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createUser = (request, response) => {
    console.log(request.body.data)
    let data = request.body.data
    let id = data.id
    let name = data.name
    let email = data.email
    console.log(`INSERT INTO users (id,name,email) values (${id},'${name}','${email}')`)
    pool.query(`INSERT INTO users (id,name,email) values (${id},'${name}','${email}')`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${id}`)
    })
  }


module.exports = {
getUsers,
createUser
}