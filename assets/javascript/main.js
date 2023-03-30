const main = document.querySelector('main')
let titleDiv = document.createElement('div')
main.append(titleDiv)


const sendButton = document.querySelector('#sendButton');


sendButton.addEventListener('click', function() {

    let userWord = document.querySelector('#inputWord').value;
    console.log(userWord);


    let reversedWord = myReverseString(userWord);
    console.log(reversedWord)


    if (userWord == reversedWord){

        titleDiv.innerHTML += `<h2>- <span class="text-uppercase text-success">${userWord}</span> è una parola palindroma!</h2>`

    } else {

        titleDiv.innerHTML += `<h2>- <span class="text-uppercase text-danger">${userWord}</span> non è una parola palindroma. <br> Al contrario risulta <span class="text-uppercase text-warning">${reversedWord}</span>.</h2>`

    }
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