document.writeln("Con writeln scrivo nella pagina");

alert("sono un alert, ho la precedenza assoluta e ti impedisco di operare in pagina, tsè ");

prompt("come alert blocco la pagina, esigo una risposta e il valore è sempre STRINGA");   

var userName = prompt("come ti chiami=?");
document.getElementById('name').innerHTML = userName;