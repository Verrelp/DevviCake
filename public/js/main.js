const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCart = document.querySelector(".listCart");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");
const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");




// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());


openShopping.addEventListener("click", () => {
    body.classList.add("active")
})

closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

let products = [
    {
        id: 1,
        name: "PRODUCT 1",
        images: "1.PNG",
        price: 30000
    },

    {
        id: 2,
        name: "PRODUCT 1",
        images: "2.PNG",
        price: 30000
    },
    {
        id: 3,
        name: "PRODUCT 1",
        images: "3.PNG",
        price: 35000
    },
    {
        id: 4,
        name: "PRODUCT 1",
        images: "4.PNG",
        price: 34000
    },
    {
        id: 5,
        name: "PRODUCT 1",
        images: "5.PNG",
        price: 32000
    },
    {
        id: 6,
        name: "PRODUCT 1",
        images: "5.PNG",
        price: 32000
    },

]

let listCarts = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <img src ="images/${value.images}">
        <div class = "title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
       <button onclick="addToCart(${key})">Add To Cart</button>
       `;
        list.appendChild(newDiv)

    })
}

initApp()

const addToCart = (key) => {
    if (listCarts[key] == null) {
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
        listCarts[key].quantity = 1
    }

      reloadCart();
}

const reloadCart = () => {
    listCart.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listCarts.forEach((value, key) => {
        if (value != null) {
            totalPrice = totalPrice + value.price;
            count = count + value.quantity;

            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
            <div><img src="images/${value.images}" class="img-fluid"></div>
            <div class="cartTitle">${value.name}</div>
            <div class="cartPrice">${value.price.toLocaleString()}</div>

            <div>
            <button style="background-color: #560bad;" class="cartButton" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            <div class="count">${value.quantity}</div>
            <button style="background-color: #560bad;" class="cartButton" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
            </div>
            `;

            listCart.appendChild(newDiv);
        }
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
    
    if (count === 0) {
        total.innerText = "0";
        quantity.innerText = "0";
    }
}


const changeQuantity = (key, quantity) => {
    if(quantity <= 0){
       delete listCarts[key]
    }
    else{
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price
    }

    reloadCart()
}