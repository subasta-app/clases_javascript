new Promise((resolver, rechazar) => {
    console.log('Inicial');
    let sumaInicial = 2
    setTimeout(()=>{
        resolver(sumaInicial);
    }, 2000); 
})
.then((datos) => {
    console.log('estos son los datos');
    return datos + 4
})
.catch((e) => {
    console.log(e);
})
.then((response) => {
    console.log('estos son los response');
    console.log(response);
    console.log('Haz esto sin que importe lo que sucedió antes');
    response = 1 + response 
    console.log(response)
});