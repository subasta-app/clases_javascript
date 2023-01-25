function esperarXtiempo(time){
    setTimeout(()=>{
        return 2500
    },time * 1000)
}

async function llamandoAEsperando(){
    console.log('entro')
    const response =  esperarXtiempo(5)
    console.log('la division es: ' + response / 2)
}

//llamandoAEsperando();



function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2500);
      }, 5000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log('la division es: '+ result / 2);
    console.log('algo')
    // Expected output: "resolved"
  }
  
  asyncCall();


  