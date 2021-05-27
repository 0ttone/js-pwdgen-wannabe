document.writeln("Con writeln scrivo nella pagina");

 alert("sono un alert, ho la precedenza assoluta e ti impedisco di operare in pagina, tsè ");

prompt("come alert blocco la pagina, esigo una risposta e il valore è sempre STRINGA");   

var userName = prompt("come ti chiami=?");
document.getElementById('name').innerHTML = userName;


var year = prompt('inserisci la tua data di nascita');
var age = 2021 - year;
document.getElementById('age-result').innerHTML = "La tua età è "+ age;