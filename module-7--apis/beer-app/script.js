const urlBase = "https://api.punkapi.com/v2/beers";

async function getBeers() {
  // get that beer
  const beerPromise = await fetch(urlBase);
  const beerJSON = await beerPromise.json();
  console.log(beerJSON[0]);

  const beersDiv = document.querySelector(".beers");
  let beerHTML = "";

  // render all those beers
  beerJSON.forEach((beer) => {
    beerHTML += `
    <div class="beer-wrapper card">
      <div class="beer">
        <img alt="" src="${beer.image_url}" class="beer__img" />
        <h3>${beer.name}</h3>
        <span class="beer__info">
          <span>ABV: ${beer.abv}%</span>
          <span>IBU: ${beer.ibu}%</span>
        </span>
      </div>
    </div>
    `;
  });

  // serve that beer to the page!
  beersDiv.innerHTML = beerHTML;
}

getBeers();
