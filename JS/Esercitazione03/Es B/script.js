/*Crea un oggetto che rappresenti un libro con le seguenti proprietà: Titolo, Autore, Anno di pubblicazione, Genere, Numero di pagine
Quindi, utilizza un ciclo for...in per stampare ogni proprietà dell'oggetto sulla console.*/

const libro = 
{
  titolo: "Il Signore degli Anelli",
  autore: "J.R.R. Tolkien",
  annoDiPubblicazione: 1954,
  genere: "Fantasy",
  numeroDiPagine: 1179
};

for (const proprieta in libro) 
{
  console.log(`${proprieta}: ${libro[proprieta]}`);
}