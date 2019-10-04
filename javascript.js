var grandtotal = 0;
var arraylist = [];
function init(){
    var firstTime = sessionStorage.getItem("first");
        if(!firstTime) {
            sessionStorage.setItem("first","1");
            
        } else {
            arraylist = JSON.parse(sessionStorage.arraylist);
            grandtotal = JSON.parse(sessionStorage.getItem("gt"));
			var allItems = JSON.parse(sessionStorage.arraylist);

        for (var i = 0; i < allItems.length; i++) {					
				var node = document.createElement("LI");
				var textnode = document.createTextNode(allItems[i]);
                node.appendChild(textnode);
				document.getElementById("myList").appendChild(node);
            }
            document.getElementById("grand").innerHTML = "Grand Total = " + grandtotal;
            } 
        }

        function leave() {
                sessionStorage.removeItem("gt");
                sessionStorage.removeItem("first");
                arraylist = [];
                //save arraylist to memory
                sessionStorage.arraylist = JSON.stringify(arraylist);
                location.reload();
        }

//Spaghetti function
function checkspaghetti() {
    var quantity = document.getElementById("spaghetti").value;
    if (quantity >= 50) {
        document.getElementById("spaghettiavailable").innerHTML = "Delivery time may be longer because of large order.";
    }
    else {
        document.getElementById("spaghettiavailable").innerHTML = "Meal is in stock.";
    }
}
function addspag(){
        var node = document.createElement("LI");
        var item = document.getElementById("spaghetti").value;
        var price = 5.99; 
        total = price * item;
        grandtotal =  grandtotal + total;
        document.getElementById("spaghetti").value = "";
        if (item < 1) {
            document.getElementById("spaghettiavailable").innerHTML = "Quantity must be between 1 and 25.";
        }
        else if (item > 25){
            document.getElementById("spaghettiavailable").innerHTML = "Quantity must be between 1 and 25.";
        }
        else {
        var full = item + " x Spaghetti " + price + " = " + total.toFixed(2);
        arraylist.push(full);
        var textnode = document.createTextNode(full);
            node.appendChild(textnode);
            grandtotal = parseFloat(grandtotal.toFixed(2));
            document.getElementById("grand").innerHTML = "Grand Total = " + grandtotal.toFixed(2);
            document.getElementById("myList").appendChild(node);
//new		
		sessionStorage.setItem("gt",grandtotal);
        }        
    }

    


//Grilled Chicken Wrap
function checkchicken() {
    var quantity = document.getElementById("chicken").value;
    if (quantity >= 50) {
        document.getElementById("chickenavailable").innerHTML = "Delivery time may be longer because of large order.";
    }
    else {
        document.getElementById("chickenavailable").innerHTML = "Meal is in stock.";
    }
}
function addwrap(){
    var node = document.createElement("LI");
    var item = document.getElementById("chicken").value;
    var price = 7.50;
    total = price * item;
    grandtotal =  grandtotal + total;
    document.getElementById("chicken").value = "";
    if (item < 1) {
        document.getElementById("chickenavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else if (item > 25){
        document.getElementById("chickenavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else {
        var full = item + " x Grilled Chicken Wrap " + price + " = " + total;
        arraylist.push(full);
        var textnode = document.createTextNode(full);
        node.appendChild(textnode);
        document.getElementById("grand").innerHTML = "Grand Total = " + grandtotal.toFixed(2);
        document.getElementById("myList").appendChild(node);
    }
}


//Burger
function checkburger() {
    var quantity = document.getElementById("burger").value;
    if (quantity >= 50) {
        document.getElementById("burgeravailable").innerHTML = "Delivery time may be longer because of large order.";
    }
    else {
        document.getElementById("burgeravailable").innerHTML = "Meal is in stock.";
    }
}
function addburger(){
    var node = document.createElement("LI");
    var item = document.getElementById("burger").value;
    var price = 10.99;
    total = price * item;
    grandtotal =  grandtotal + total;
    document.getElementById("burger").value = "";
    if (item < 1) {
        document.getElementById("burgeravailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else if (item > 25){
        document.getElementById("burgeravailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else {
        var full = item + " x Burger w/ Fries " + price + " = " + total.toFixed(2);
        arraylist.push(full);
        var textnode = document.createTextNode(full);
        node.appendChild(textnode);
        document.getElementById("grand").innerHTML = "Grand Total = " + grandtotal.toFixed(2);
        document.getElementById("myList").appendChild(node);
    }
}
//Salmon
function checksalmon() {
    var quantity = document.getElementById("salmon").value;
    if (quantity >= 50) {
        document.getElementById("salmonavailable").innerHTML = "Delivery time may be longer because of large order.";
    }
    else {
        document.getElementById("salmonavailable").innerHTML = "Meal is in stock.";
    }
}
function addsalmon(){
    var node = document.createElement("LI");
    var item = document.getElementById("salmon").value;
    var price = 9.99;
    total = price * item;
    grandtotal =  grandtotal + total;
    document.getElementById("salmon").value = "";
    if (item < 1) {
        document.getElementById("salmonavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else if (item > 25){
        document.getElementById("salmonavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else {
        var full = item + " x Grilled Salmon " + price + " = " + total.toFixed(2);
        arraylist.push(full);
        var textnode = document.createTextNode(full);
        node.appendChild(textnode);
        document.getElementById("grand").innerHTML = "Grand Total = " + grandtotal.toFixed(2);
        document.getElementById("myList").appendChild(node);
    }
}

//ROW 2
//Pizza
function checkpizza() {
    var quantity = document.getElementById("pizza").value;
    if (quantity >= 50) {
        document.getElementById("pizzaavailable").innerHTML = "Delivery time may be longer because of large order.";
    }
    else {
        document.getElementById("pizzaavailable").innerHTML = "Meal is in stock.";
    }
}
function addpizza(){
    var node = document.createElement("LI");
    var item = document.getElementById("pizza").value;
    var price = 8.99;
    total = price * item;
    grandtotal =  grandtotal + total;
    document.getElementById("pizza").value = "";
    if (item < 1) {
        document.getElementById("pizzaavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else if (item > 25){
        document.getElementById("pizzaavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else {
        var full = item + " x Pizza " + price + " = " + total.toFixed(2);
        arraylist.push(full);
        var textnode = document.createTextNode(full);
        node.appendChild(textnode);
        document.getElementById("grand").innerHTML = "Grand Total = " + grandtotal.toFixed(2);
        document.getElementById("myList").appendChild(node);
    }
}

//Fries
function checkfries() {
    var quantity = document.getElementById("fries").value;
    if (quantity >= 50) {
        document.getElementById("friesavailable").innerHTML = "Delivery time may be longer because of large order.";
    }
    else {
        document.getElementById("friesavailable").innerHTML = "Meal is in stock.";
    }
}
function addfries(){
    var node = document.createElement("LI");
    var item = document.getElementById("fries").value;
    var price = 4.50;
    total = price * item;
    grandtotal =  grandtotal + total;
    document.getElementById("fries").value = "";
    if (item < 1) {
        document.getElementById("friesavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else if (item > 25){
        document.getElementById("friesavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else {
        var full = item + " x Garlic Parmesan Fries " + price + " = " + total.toFixed(2);
        arraylist.push(full);
        var textnode = document.createTextNode(full);
        node.appendChild(textnode);
        document.getElementById("grand").innerHTML = "Grand Total = " + grandtotal.toFixed(2);
        document.getElementById("myList").appendChild(node);
    }
}

//Caprese
function checkcaprese() {
    var quantity = document.getElementById("caprese").value;
    if (quantity >= 50) {
        document.getElementById("capreseavailable").innerHTML = "Delivery time may be longer because of large order.";
    }
    else {
        document.getElementById("capreseavailable").innerHTML = "Meal is in stock.";
    }
}
function addsandwich(){
    var node = document.createElement("LI");
    var item = document.getElementById("caprese").value;
    var price = 4.99;
    total = price * item;
    grandtotal =  grandtotal + total;
    document.getElementById("caprese").value = "";
    if (item < 1) {
        document.getElementById("capreseavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else if (item > 25){
        document.getElementById("capreseavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else {
        var full = item + " x Caprese Sandwich " + price + " = " + total.toFixed(2);
        arraylist.push(full);
        var textnode = document.createTextNode(full);
        node.appendChild(textnode);
        document.getElementById("grand").innerHTML = "Grand Total = " + grandtotal.toFixed(2);
        document.getElementById("myList").appendChild(node);
    }
}

//Veggie
function checkveggie() {
    var quantity = document.getElementById("veggie").value;
    if (quantity >= 50) {
        document.getElementById("veggieavailable").innerHTML = "Delivery time may be longer because of large order.";
    }
    else {
        document.getElementById("veggieavailable").innerHTML = "Meal is in stock.";
    }
}
function addveggie(){
    var node = document.createElement("LI");
    var item = document.getElementById("veggie").value;
    var price = 5.99;
    total = price * item;
    grandtotal =  grandtotal + total;
    document.getElementById("veggie").value = "";
    if (item < 1) {
        document.getElementById("veggieavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else if (item > 25){
        document.getElementById("veggieavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else {
        var full = item + " x Veggie Burger " + price + " = " + total.toFixed(2);
        arraylist.push(full);
        var textnode = document.createTextNode(full);
        node.appendChild(textnode);
        document.getElementById("grand").innerHTML = "Grand Total = " + grandtotal.toFixed(2);
        document.getElementById("myList").appendChild(node);
    }
}

//ROW 3
//Pasta
function checkpasta() {
    var quantity = document.getElementById("pasta").value;
    if (quantity >= 50) {
        document.getElementById("pastaavailable").innerHTML = "Delivery time may be longer because of large order.";
    }
    else {
        document.getElementById("pastaavailable").innerHTML = "Meal is in stock.";
    }
}
function addpasta(){
    var node = document.createElement("LI");
    var item = document.getElementById("pasta").value;
    var price = 6.50;
    total = price * item;
    grandtotal =  grandtotal + total;
    document.getElementById("pasta").value = "";
    if (item < 1) {
        document.getElementById("pastaavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else if (item > 25){
        document.getElementById("pastaavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else {
        var full = item + " x Pesto Pasta " + price + " = " + total.toFixed(2);
        arraylist.push(full);
        var textnode = document.createTextNode(full);
        node.appendChild(textnode);
        document.getElementById("grand").innerHTML = "Grand Total = " + grandtotal.toFixed(2);
        document.getElementById("myList").appendChild(node);
    }
}

//Salad
function checksalad() {
    var quantity = document.getElementById("salad").value;
    if (quantity >= 50) {
        document.getElementById("saladavailable").innerHTML = "Delivery time may be longer because of large order.";
    }
    else {
        document.getElementById("saladavailable").innerHTML = "Meal is in stock.";
    }
}
function addsalad(){
    var node = document.createElement("LI");
    var item = document.getElementById("salad").value;
    var price = 4.50;
    total = price * item;
    grandtotal =  grandtotal + total;
    document.getElementById("salad").value = "";
    if (item < 1) {
        document.getElementById("saladavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else if (item > 25){
        document.getElementById("saladavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else {
        var full = item + " x Leafy Green Salad " + price + " = " + total.toFixed(2);
        arraylist.push(full);
        var textnode = document.createTextNode(full);
        node.appendChild(textnode);
        document.getElementById("grand").innerHTML = "Grand Total = " + grandtotal.toFixed(2);
        document.getElementById("myList").appendChild(node);
    }
}

//Soup
function checksoup() {
    var quantity = document.getElementById("soup").value;
    if (quantity >= 50) {
        document.getElementById("soupavailable").innerHTML = "Delivery time may be longer because of large order.";
    }
    else {
        document.getElementById("soupavailable").innerHTML = "Meal is in stock.";
    }
}
function addsoup(){
    var node = document.createElement("LI");
    var item = document.getElementById("soup").value;
    var price = 4.99;
    total = price * item;
    grandtotal =  grandtotal + total;
    document.getElementById("soup").value = "";
    if (item < 1) {
        document.getElementById("soupavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else if (item > 25){
        document.getElementById("soupavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else {
        var full = item + " x Tomato Soup " + price + " = " + total.toFixed(2);
        arraylist.push(full);
        var textnode = document.createTextNode(full);
        node.appendChild(textnode);
        document.getElementById("grand").innerHTML = "Grand Total = " + grandtotal.toFixed(2);
        document.getElementById("myList").appendChild(node);
    }
}

//Curry
function checkcurry() {
    var quantity = document.getElementById("curry").value;
    if (quantity >= 50) {
        document.getElementById("curryavailable").innerHTML = "Delivery time may be longer because of large order.";
    }
    else {
        document.getElementById("curryavailable").innerHTML = "Meal is in stock.";
    }
}
function addcurry(){
    var node = document.createElement("LI");
    var item = document.getElementById("curry").value;
    var price = 5.99;
    total = price * item;
    grandtotal =  grandtotal + total;
    document.getElementById("curry").value = "";
    if (item < 1) {
        document.getElementById("curryavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else if (item > 25){
        document.getElementById("curryavailable").innerHTML = "Quantity must be between 1 and 25.";
    }
    else {
        var full = item + " x Curry w/ Rice " + price + " = " + total.toFixed(2);
        arraylist.push(full);
        var textnode = document.createTextNode(full);
        node.appendChild(textnode);
        document.getElementById("grand").innerHTML = "Grand Total = " + grandtotal.toFixed(2);
        document.getElementById("myList").appendChild(node);
    }
}

