const textBody = document.querySelector('.container');
const idDisplay = document.querySelector('h3');
const textDisplay = document.querySelector('h1');
const button = document.querySelector('#btn');

let adviceMessage = '';
let idMessage = '';


async function getAdvice() {
    // wait for the program to fetch the API data, then turn the response into JSON and store it as the constant, data
    const data = await fetch('https://api.adviceslip.com/advice').then(res => res.json());

    // use the new data object to set message string values
    adviceMessage =  data.slip.advice;
    idMessage = data.slip.id;
}


button.addEventListener('click', () => {
    textBody.setAttribute('style', 'opacity:0')
    // wait for the getAdvice() function to set the message string values
    getAdvice().then(() => {
         // then, set the DOM element textContents based on the message string values
        idDisplay.textContent = `ADVICE # ${idMessage}`
        textDisplay.textContent = adviceMessage;
    });
    setTimeout(() => {
        textBody.setAttribute('style', 'opacity: 1')
    },500)

})