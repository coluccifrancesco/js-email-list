// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Steps:

// Ora implementa la richiesta usando l'esempio nelle slide tramite javascript fetch
const myHeaders = new Headers();
myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6IktUOXpsNThXRVl5RXowejB1bFRlbXc9PSIsInZhbHVlIjoiVzFDaDRrNE9hbklBWVBENm1NbVdOYnRUd3VJMGpCMVNWNk1yajRYeXhcL0FJdmdmbHpsTDVmbEVDdmxGaWUrckMiLCJtYWMiOiI1MzZkZjA1ODMzZTNiOTRkOGJiOTFmNDhmNThhNDJlYWZjYWEyYjlhMDI2Y2ZmMWYwYmI0YTg2MWFjZTJkZTVmIn0%3D; laravel_session=eyJpdiI6IllQZnFQZ3NMdVZ5dDM4ZjhkbldjSFE9PSIsInZhbHVlIjoiWUl6YUdMcjkxdFJPSG9oXC9PVHhldUwyTGk4V3ArMDkyblpxMG9ERmpvc0g1ZmtUXC9ET21KUW81TkoxdXVxUFwvaSIsIm1hYyI6IjIxOWI2OTk0MjEyYWRmNjc2YTEwZWZiMDYyMjcyNDI5N2RiNDkzOGM0OGE0YzVjNjhhZDdkNDNlZTFkNDA4M2IifQ%3D%3D");



for(let i = 0; i < 10; i++){
    const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
    };
   
    fetch("https://flynn.boolean.careers/exercises/api/random/mail", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

// Stampa il risultato della singola mail in console per confermare che la chiamata sia andata a buon fine e siano presenti i risultati


// Aggiorna la DOM inserendo gli indirizzi generati in una lista




// Bonus (opzionale)
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)