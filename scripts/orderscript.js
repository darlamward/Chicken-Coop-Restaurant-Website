order = ""

function ShowAdd() {
    var checkBox = document.getElementById("Delivery");
    
    if (checkBox.checked == true){
      Address.style.display = "block";
    } else {
       Address.style.display = "none";
    }
  }

function bigbreakfast(){
  order = `${order}Big Breakfast QTY ${document.getElementById('bigbreakfastQTY').value}<br>`
  console.log(order)
  document.getElementById("Cart").innerHTML = order 
  document.getElementById("Order").value = order 
}

function chickenwaffles(){
  order = `${order}Chicken & Waffles QTY ${document.getElementById('chickenwafflesQTY').value}<br>`
  console.log(order)
  document.getElementById("Cart").innerHTML = order 
  document.getElementById("Order").value = order 
}

function pancakes(){
  order = `${order}Pancakes QTY ${document.getElementById('pancakesQTY').value}<br>`
  console.log(order)
  document.getElementById("Cart").innerHTML = order 
  document.getElementById("Order").value = order 
}

function salad(){
  order = `${order}Chicken Coop Salad QTY ${document.getElementById('saladQTY').value}<br>`
  console.log(order)
  document.getElementById("Cart").innerHTML = order 
  document.getElementById("Order").value = order 
}

function sandwich(){
  order = `${order}Coop House Sandwich QTY ${document.getElementById('sandwichQTY').value}<br>`
  console.log(order)
  document.getElementById("Cart").innerHTML = order 
  document.getElementById("Order").value = order 
}

function wrap(){
  order = `${order}Coop House Wrap QTY ${document.getElementById('wrapQTY').value}<br>`
  console.log(order)
  document.getElementById("Cart").innerHTML = order 
  document.getElementById("Order").value = order 
}

function feast(){
  order = `${order}Feast For Two QTY ${document.getElementById('feastQTY').value}<br>`
  console.log(order)
  document.getElementById("Cart").innerHTML = order 
  document.getElementById("Order").value = order 
}

function kebab(){
  order = `${order}Coop Kebab Platter QTY ${document.getElementById('kebabQTY').value}<br>`
  console.log(order)
  document.getElementById("Cart").innerHTML = order 
  document.getElementById("Order").value = order 
}

function coopdinner(){
  order = `${order}Full Coop Dinner QTY ${document.getElementById('coopdinnerQTY').value}<br>`
  console.log(order)
  document.getElementById("Cart").innerHTML = order 
  document.getElementById("Order").value = order 
}

function coopcookie(){
  order = `${order}Coop Cookie QTY ${document.getElementById('cookieQTY').value}<br>`
  console.log(order)
  document.getElementById("Cart").innerHTML = order 
  document.getElementById("Order").value = order 
}

function sundae(){
  order = `${order}Full Coop Sundae QTY ${document.getElementById('sundaeQTY').value}<br>`
  console.log(order)
  document.getElementById("Cart").innerHTML = order 
  document.getElementById("Order").value = order 
}

function pie(){
  order = `${order}Local Berry Pie QTY ${document.getElementById('pieQTY').value}<br>`
  console.log(order)
  document.getElementById("Cart").innerHTML = order 
  document.getElementById("Order").value = order 
}

function milkshake(){
  order = `${order}Coop Shake QTY ${document.getElementById('milkshakeQTY').value}<br>`
  console.log(order)
  document.getElementById("Cart").innerHTML = order 
  document.getElementById("Order").value = order 
}

function smoothie(){
  order = `${order}Smoothie QTY ${document.getElementById('smoothieQTY').value}<br>`
  console.log(order)
  document.getElementById("Cart").innerHTML = order 
  document.getElementById("Order").value = order 
}

function soda(){
  order = `${order}Soda QTY ${document.getElementById('sodaQTY').value}<br>`
  console.log(order)
  document.getElementById("Cart").innerHTML = order 
  document.getElementById("Order").value = order 
}