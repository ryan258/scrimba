const urlBase = "https://api.punkapi.com/v2/beers";
const filterABV = document.getElementById("filterABV");
let optionsABV = "";

// filters
filterABV.addEventListener("change", (e) => {
  const value = e.target.value;
  console.log(value);
  switch (value) {
    case "all":
      optionsABV = "";
      break;
    case "weak":
      optionsABV = "abv_lt=4.6";
      break;
    case "medium":
      optionsABV = "abv_gt=4.5&abv_lt=7.6";
      break;
    case "strong":
      optionsABV = "abv_gt=7.5";
      break;
  }

  getBeers();
});

async function getBeers() {
  const url = urlBase + "?" + optionsABV;
  // console.log(url);
  // get that beer
  const beerPromise = await fetch(url);
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
          <span>IBU: ${beer.ibu}</span>
        </span>
      </div>
      <div class="beer__content">
        <div class="beer__name">${beer.name}</div>
        <div class="beer__tagline">${beer.tagline}</div>
        <div class="beer__description">${beer.description}</div>
        <div class="beer__food-pairing">
          Pair with: ${beer.food_pairing.join(", ")}
        </div>
        
      </div>
    </div>
    `;
  });

  // serve that beer to the page!
  beersDiv.innerHTML = beerHTML;
}

getBeers();
