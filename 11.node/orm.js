const { Sequelize,Model, DataTypes } = require('sequelize');

let user= 'jcespitia'
let host= 'localhost'
let database= 'sample_test'
let  password= process.env.PASSWORD

const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect:'postgres'
  });

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

const User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});
