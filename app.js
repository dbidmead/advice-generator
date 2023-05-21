const containerEl = document.querySelector('.container');
const textBody = document.querySelector('.text-content');
const idDisplay = document.querySelector('h3');
const textDisplay = document.querySelector('h1');
const button = document.querySelector('#btn');

let adviceMessage = '';
let idMessage = '';
 console.log(window.innerWidth)


async function getAdvice() {
    // wait for the program to fetch the API data, then turn the response into JSON and store it as the constant, data
    const data = await fetch('https://api.adviceslip.com/advice').then(res => res.json());

    // use the new data object to set message string values
    adviceMessage =  data.slip.advice;
    idMessage = data.slip.id;
    return data;
}

function handleTransition() {
    containerEl.removeEventListener('transitionend', handleTransition);
    containerEl.style.height = null;
    newHeight = null;
}

// to access the data object, you need to call the async function FIRST to wait for its return value 
// THEN perform the callback function which takes the async return as a parameter
getAdvice().then((data) => console.log(data))

button.addEventListener('click', () => {
    let dividerEl = window.innerWidth < 550 ? 
        document.querySelector('#mobile-divider') :
        document.querySelector('#desktop-divider');

    let currentHeight = getComputedStyle(containerEl).height;
    containerEl.style.height = currentHeight;

    textBody.setAttribute('style', 'opacity:0')
    dividerEl.setAttribute('style', 'opacity:0')

    setTimeout(() => {
        containerEl.style.height = 0
    },200)

    setTimeout(() => {
        // wait for the getAdvice() function to set the message string values
        getAdvice().then(() => {
            // then, set the DOM element textContents based on the message string values
            idDisplay.textContent = `ADVICE # ${idMessage}`
            textDisplay.textContent = adviceMessage;
        });
        setTimeout(() => {
            let newHeight = containerEl.scrollHeight;
            containerEl.addEventListener('transitionend', handleTransition)
            containerEl.style.height = `${newHeight}px`;
        },200)
        setTimeout(() => {
            textBody.setAttribute('style', 'opacity: 1');
            dividerEl.setAttribute('style', 'opacity: 1');
        },600)
    },600)
})