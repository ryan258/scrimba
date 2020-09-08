const urlBase = "https://api.punkapi.com/v2/beers";

async function getBeers() {
  // get that beer
  const beerPromise = await fetch(urlBase);
  const beerJSON = await beerPromise.json();
  // console.log(beerJSON);

  const beersDiv = document.querySelector(".beers");
  let beerHTML = "";

  beerJSON.forEach((beer) => {
    beerHTML += `
      <h3>${beer.name}</h3>
    `;
  });

  // serve that beer to the page!
  beersDiv.innerHTML = beerHTML;
}

getBeers();
