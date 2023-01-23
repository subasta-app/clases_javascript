//CRUD

//person = { 'name':'pepito','age':25, 'is-developer':false }

// tipos de nombramiento de Variables o Clases
// unaVariable
// una_variable
// UnaVariable --> llamar clases
const fs = require('fs');
fs.writeFileSync('./cuarta_clase/team.json', JSON.stringify(team));



function addPerson(){
    
    let team = [];//require('./team.json');

    let name = document.getElementById("nameValue").value
    let age = document.getElementById("age").value
    let isDeveloper = document.getElementById("isDeveloper").checked

    let person = { 'name': name, 'age': age, 'is-developer': isDeveloper };
    team.push(person);
    console.log(team)
};



function showTeam(){
    console.log(team);
};
