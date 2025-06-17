const emails = [];

for (let i = 0; i < 10; i++) {
    fetch('https://flynn.boolean.careers/exercises/api/random/mail')  // facciamo la chiamata http
    
    .then(response => {

        // "lancio" un errore che viene poi "preso" in caso la risposta non sia 'ok'
        if(!response.ok){
            throw new Error ('Could not fetch the resource');
        } 
            
        return response.json();

    })  // prendiamo la risposta e la rendiamo leggibile in Json
     

    .then(data => {
        // stampo tra i dati, la risposta della richiesta
        console.log(data.response);
        
        // inserisco le mail generate in un array
        emails.push(data.response);
    })
    
    .catch(error => console.error(error));      // in caso di errore lo logghiamo
}

console.log(emails);

// Inserisco gli elementi nel DOM
const listCont = document.getElementById('mail-container');

const listEl = document.createElement('ul');

for (let i = 0; i < emails.length; i++) {
    let mail = emails[i];
    console.log(mail);
    
    const listItem = document.createElement('li');
    
    listItem.textContent = mail;
    listEl.appendChild(listItem);
}

listCont.appendChild(listEl)

// Bonus (opzionale)
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)