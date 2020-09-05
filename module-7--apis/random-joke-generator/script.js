const setupDiv = document.getElementById("setup");
const punchlineDiv = document.getElementById("punchline");
const punchlineButton = document.getElementById("punchlineButton");
const newJokeButton = document.getElementById("newJokeButton");

let punchline;

const getPunchline = () => {
  punchlineDiv.innerHTML = punchline;
  punchlineDiv.classList.add("bubble");
  punchlineButton.classList.toggle("hidden");
  newJokeButton.classList.toggle("hidden");
};

punchlineButton.addEventListener("click", getPunchline);

const getJoke = async () => {
  const jokePromise = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  );

  const joke = await jokePromise.json();

  setupDiv.innerText = joke[0].setup;
  punchline = joke[0].punchline;

  punchlineButton.classList.toggle("hidden");
  newJokeButton.classList.toggle("hidden");
  // punchlineDiv.classList.add("hidden");
  punchlineDiv.innerText = "";
  punchlineDiv.classList.remove("bubble");
};

newJokeButton.addEventListener("click", getJoke);

getJoke();

//// The second way to structure the function
// async function getJoke() {
//   const jokePromise = await fetch(
//     "https://official-joke-api.appspot.com/jokes/programming/random"
//   );
//   const joke = await jokePromise.json();

//   console.log(joke);
// }
