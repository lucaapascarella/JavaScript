/*Scrivere una semplice applicazione calcolatrice. Chiedere all'utente due numeri e una stringa che rappresenta un'operazione matematica, uno tra "+", "-", "*", "/", "**". Se l'input dell'utente è valido, calcola il risultato e mostralo all'utente. Se l'input dell'utente non è valido, visualizza un messaggio che informa l'utente che si è verificato un errore. Si ricorda che il valore restituito dalla funzione prompt è di tipo stringa. Puoi utilizzare il metodo Number.isNaN per verificare se ottieni il numero corretto dopo la conversione. Ad esempio, la chiamata a Number.isNaN(10) restituirà false, mentre Number.isNaN(NaN) restituirà true.*/

function calcolaRisultato(numero1, numero2, operazione) 
{
    switch (operazione) {
      case "+":
        return numero1 + numero2;
      case "-":
        return numero1 - numero2;
      case "*":
        return numero1 * numero2;
      case "/":
        return numero1 / numero2;
      case "**":
        return numero1 ** numero2;
      default:
        return NaN;
    }
  }
  
  const numero1 = Number(prompt("Inserisci il primo numero:"));
  const numero2 = Number(prompt("Inserisci il secondo numero:"));
  const operazione = prompt("Inserisci l'operazione matematica (+, -, *, /, **):");
  
  if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
    console.log("Errore: entrambi i numeri devono essere numeri.");
  } else if (operazione !== "+" && operazione !== "-" && operazione !== "*" && operazione !== "/" && operazione !== "**") {
    console.log("Errore: l'operazione deve essere una delle seguenti: +, -, *, /, **.");
  } else {
    const risultato = calcolaRisultato(numero1, numero2, operazione);
    console.log(`Il risultato dell'operazione ${numero1} ${operazione} ${numero2} è: ${risultato}`);
  }