const main = document.querySelector('main')
let titleDiv = document.createElement('div')
main.append(titleDiv)

const form = document.querySelector('form');
const sendButton = document.querySelector('#sendButton');


form.addEventListener('submit', function(invioForm) {
    invioForm.preventDefault();

    let userWord = document.querySelector('#inputWord').value;
    console.log(userWord);


    let reversedWord = myReverseString(userWord);
    console.log(reversedWord)


    if (userWord == reversedWord){

        titleDiv.innerHTML += `
        <h2 class="border p-1 mb-2">
        <i class="fa-solid fa-check" style="color: #00ff1e;"></i>
        <span class="text-uppercase fst-italic text-success">${userWord}</span> è una parola palindroma!
        </h2>
        `

    } else {

        titleDiv.innerHTML += `
        <h2 class="border p-1 mb-2">
        <i class="fa-solid fa-xmark" style="color: #ff0000;"></i>
        <span class=" fst-italic text-danger">${userWord}</span> non è una parola palindroma.
        <br>
        Al contrario si legge <span class=" fst-italic text-warning">${reversedWord}</span>.
        </h2>
        `

    }

    form.reset ();
})


/* -- Funzione per invertire una stringa -- */
function myReverseString(x) {
    
    let reversedString = '';

    for (let i = (x.length - 1); i >= 0; i--) {
        // console.log(userString[i])
    
        reversedString += x[i];
    };

    return reversedString;
}