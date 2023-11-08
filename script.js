const container = document.querySelector(".container");

if (data && data.length > 0) {
  data.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    let starsEle = ``;
    const rating = Number(Math.round(product.rating.rate));

    for (let i = 1; i <= rating; i++) {
      starsEle += `<span class="star__filled">&#9733;</span>`;
    }

    for (let i = rating; i < 5; i++) {
      starsEle += `<span class="star__notfilled">&#9734;</span>`;
    }
    card.innerHTML = ` <div class="details">
    <span class="product__name">${product.title}</span>
    <br>
    <span class="product__category">${product.category}</span>
 
    <div class="all__star"> 
    ${starsEle} 
</div>
    <div class="rating__count">Rating Count : <span>${product.rating.count}</span></div>
    </div>
    <div class="btn">
    <button class="btn__buy">Buy Now</button>
    </div>`;
    container.appendChild(card);
  });
}
