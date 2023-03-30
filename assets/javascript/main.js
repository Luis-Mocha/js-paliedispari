/* --PAROLE PALINDROME */
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


/* -- PARI E DISPARI */
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let userChoice = 'dispari';

let userNumber = randomNumber(1, 5);
let computerNumber = randomNumber(1, 5);
console.log(userNumber, computerNumber);

let summedNumbers = addNumbers(userNumber, computerNumber)
console.log(summedNumbers);

let finalResult = evenOrOdd(summedNumbers);
console.log(finalResult);

if (userChoice == finalResult) {
    console.log('hai vinto!')
} else {
    console.log('hai perso!')
};


// Funzione per generare un numero casuale
function randomNumber(min, max) {
    return Math.floor( Math.random() * max + min );        
};
// Funzione per sommare i due numeri casuali
function addNumbers(a, b) {
    return (a + b)       
};
//Funzione per capire se è dispari o pari
function evenOrOdd(x) {
    if (x % 2 == 0) {
        return 'pari'
    }
    else {
        return 'dispari'
    }
};

