let itemsContainerElement= 
document.querySelector('.items-container');
let innerHTML='';
items.forEach(item => {
    innerHTML+=`
    <div class="item-container">
            <img class="item-image" src="${item.item_image}" alt="item image">
            <div class="rating">
                ${item.rating.starts}⭐| ${item.rating.noOfReviews} 
            </div>
            <div class="company-name">${item.company_name}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">Rs ${item.price.current_price}</span>
                <span class="original-price">Rs ${item.price.original_price}</span>
                <span class="discount">(${item.price.discount}% OFF)</span>
            </div>
            <div>
                <button class="btn-add-bag">Add to Bag</button>
            </div>
        </div>`
});

let item={
    item_image: '1.jpg',
    rating :{
        starts: 4.5,
        noOfReviews: 1400,
    },
    company_name: 'Carton London',
    item_name:'Rhodium-plated CZ Floral Studs',
    price:{
        current_price:606,
        original_price:1045,
        discount:42,
    }
}

itemsContainerElement.innerHTML=innerHTML;