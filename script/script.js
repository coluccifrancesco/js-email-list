const generator = document.getElementById('generator');
generator.addEventListener('click', generateEmail)

function generateEmail (){
    
    const emailContainer = document.getElementById('mail-container');
    let emailMarkup = '';
    
    for (let i = 0; i < 10; i++) {
    
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(resp => resp.json())  // dopo json vanno le () sempre
        .then(email => {

            console.log(email);
            
            const {success, response} = email;

            if(success === true){
                
                emailMarkup += 
                `<li><p>${response}</p></li>`;
            
            } else {
                console.error('Riprova');   
            }

            emailContainer.innerHTML = emailMarkup;
        })
    }

    // Bonus for customization
    generator.remove()

    setTimeout(() => {
        console.log('Riprova'),
        emailContainer.innerHTML = `<span class="retry">Riprova </span><i class="fa-solid fa-rotate-right riprova generatore" id="riprova"></i>`;

        const riprova = document.getElementById('riprova');
        riprova.addEventListener('click', generateEmail)
    }, 3000)
}