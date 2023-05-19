# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [The challenge](#the-challenge)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)

## The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

## Links

- Solution URL: [https://dbidmead.github.io/advice-generator](https://dbidmead.github.io/advice-generator)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS asynchronous functions and API fetching
- JS DOM manipulation

## What I learned

### Obtain the JSON from an API
```js
async function fetchData() {
  // wait for fetch() to return a response, THEN pass its return (denoted here as res) through the callback function
  const data = await fetch('https://api.url/').then(res => res.json());
  console.log(data); // to see what the object's values are
  return data;
}

// call the async function, THEN pass its returned JSON to the callback function
fetchData().then((returnedApiInformation) => {
  // insert code do something with your API data
})
```
Essentially, to get data from an API, you have to first write an async function to wait for the fetch() function to return the data from the URL. When fetch() returns its value, then we convert the returned value to JSON. This final JSON object is returned from this initial async function.

In order to access this JSON object by running the async function, the async function must be called FIRST so that it has a chance to return its value. Then, pass the return value to a callback function.

## Author

- GitHub - [@dbidmead](https://www.github.com/dbidmead)
- Frontend Mentor - [@dbidmead](https://www.frontendmentor.io/profile/dbidmead)