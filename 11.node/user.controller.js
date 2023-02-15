const User = require('./user.model')
 
    User.create({
        name: "Camilo",
        email: "camilo@mail.com",
    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });
 

