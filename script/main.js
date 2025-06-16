for (let i = 0; i < 10; i++) {
    fetch('https://flynn.boolean.careers/exercises/api/random/mail')  // facciamo la chiamata http
    .then(response => {

        // "lancio" un errore che viene poi "preso" in caso la risposta non sia 'ok'
        if(!response.ok){
            throw new Error ('Could not fetch the resource');
        } 
            
        return response.json();

    })  // prendiamo la risposta e la rendiamo leggibile in Json
        
    .then(data => console.log(data.response))    // stampo tra i dati, la risposta della richiesta
    .catch(error => console.error(error));      // in caso di errore lo logghiamo

}


// Bonus (opzionale)
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)