/* 
    Jeopardy
    
    Write an async function 
        that uses fetch() to fetch 4 categories 
        from https://jservice.io/api/categories
        parameters: count, offset
        
    Display the categories
        in a simplified 4x5 Jeopardy Board 
        using CSS Grid
*/

/* 
    Jeopardy (Challenge)
    
    Update getCategories to take 
        count/offset arguments
    Fetch 5 Categories (Update the display as necessary)
    
    Write a getClueHtml() function
        calculate grid-row-start based on the input value
        which will always be a multiple of 100 
*/

async function getCategories(count = 5, offset = 14) {
  let response = await fetch(
    `https://jservice.io/api/categories?count=${count}&offset=${offset}`
  );
  let data = await response.json();
  return data;
  // console.log(data);
}

function getClueHTML(clueValue) {
  return `<div class="my-category-clue" style="grid-row-start: ${
    clueValue / 100 + 1
  }">$${clueValue}</div>`;
}

function getCategoryHTML(category) {
  return `
    <div class="my-category-title">${category.title}</div>
    ${getClueHTML(100)}
    ${getClueHTML(200)}
    ${getClueHTML(300)}
    ${getClueHTML(400)}
  `;
}

getCategories(5, 10).then((categories) => {
  console.log(categories);
  document.body.innerHTML = `
    <div class="board">
      ${categories.map(getCategoryHTML).join("")}
    </div>
  `;
});
