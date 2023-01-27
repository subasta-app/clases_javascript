//THIS IS MY THIRT CLASS (PALINDROME)

function palindrome(str) {                     //\W elimina todos los caracteres no-alfanuméricos.
    var re = /[\W_]/g;                         //El método toLowerCase regresa el valor de la  cadena de llamada  convertida en minúsculas.
    str = str.toLowerCase().replace(re, '');   //El método replace regresa la nueva cadena con algunas o todas las coincidencias de un patrón con un remplazo.
    for (var i = 0; i < len/2; i++) {
    var len = str.length;                      
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
    console.log(palindrome);
   }
   palindrome("Somos o no somos");
