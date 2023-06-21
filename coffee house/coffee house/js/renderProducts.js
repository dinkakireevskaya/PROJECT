const productsContainer = document.querySelector('#products-container');


getProducts();

// Асинхронная функция получения данных из файла products.json
async function getProducts() {
	
    const response = await fetch('js/products.json');
    
    const productsArray = await response.json();
    
	renderProducts(productsArray);
}

function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `<div class="col-lg-4 col-md-6 mt-4">
                <div class="card_menu" data-id = "${item.id}">
                  <a href="#"><img src="static/images/${item.imgSrc}" class="card-img-top" alt="${item.title}"></a>
                  <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">
                        ${item.price}p
                    </p>
					<div class="details-wrapper">
						<div class="items counter-wrapper">
							<div class="items__control" data-action="minus">-</div>
							<div class="items__current" data-counter>1</div>
							<div class="items__control" data-action="plus">+</div>
						</div>
						<button data-cart class="btn">Купить</button>
					</div>
                  </div>
                </div>
              </div>`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}
