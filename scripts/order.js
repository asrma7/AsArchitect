var cart = document.getElementById("cart");
var btn = document.getElementById("cart-btn");
var cart_count = document.getElementById("cart-count");
var container = document.getElementById("cart-container");
var pricebox = document.getElementById('estimated');
var form = document.getElementById('order-form');
var itemList = document.getElementById('items');
var items = [];
var price = 0;
btn.addEventListener("click", function() {
    cart.classList.toggle("open");
    if (cart.classList.contains("open"))
    {
        cart_count.style.display = "none";
        document.getElementById('cart-icon').src = "images/close.svg";
        setTimeout(() => {container.style.display = "block";}, 250);
    }
    else
    {
        cart_count.style.display = "flex";
        document.getElementById('cart-icon').src = "images/cart.svg";
        console.log(this.firstChild.src);
        container.style.display = "none";
    }
});

form.addEventListener("submit", function(e){
    form.reportValidity();
    e.preventDefault();
    items.push({name:form.elements['name'].value, type:form.elements['type'].value, price:price});
    renderCartList();
});

function renderCartList() {
    cart_count.innerHTML = items.length;
    var htmldata = "";
    for (i=0; i<items.length; i++)
    {
        htmldata += '<li>'+
        '<span class="name">'+items[i].name+'</span>'+
        '<span class="type">Type: '+items[i].type+'</span>'+
        '<span class="price">Price: '+items[i].price.toFixed(2)+'</span>'+
        '<span class="delete"><img src="images/delete.svg" width="20px" onclick="removeItem('+i+')"></span>'
        '</li>'
    }
    itemList.innerHTML = htmldata;
}

function removeItem(index) {
    items.splice(index, 1);
    renderCartList();
}

function estimateprice() {
    var type = form.elements['type'].value;
    var insurance = form.elements['insurance'].checked;
    var warranty = form.elements['warranty'].checked;
    var maintenance = form.elements['maintenance'].checked;
    var quality = form.elements['quality'].value;
    switch (type) {
        case 'interior':
            price = 4000;
            break;
        case 'architecture':
            price = 6000;
            break;
        case 'product':
            price = 1000;
            break;
    }
    if (insurance)
        price += 400;
    if (warranty)
        price += 200;
    if (maintenance)
        price += 300;
    if (quality == "high")
        price += 1 / 3 * price;
    else if (quality == "low")
        price -= 1 / 3 * price;
    pricebox.innerHTML = "$" + price.toFixed(2);
}