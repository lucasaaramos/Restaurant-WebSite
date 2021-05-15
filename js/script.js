
var myInput = document.getElementById("pass");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {

    // Validate lowercase
    var numbers = /[a-z]/g;
    if(myInput.value.match(numbers)) {  
        lowercase.classList.remove("invalid");
        lowercase.classList.add("valid");
    } else {
        lowercase.classList.remove("valid");
        lowercase.classList.add("invalid");
    }

    // Validate upercase
    var numbers = /[A-Z]/g;
    if(myInput.value.match(numbers)) {  
        upercase.classList.remove("invalid");
        upercase.classList.add("valid");
    } else {
        upercase.classList.remove("valid");
        upercase.classList.add("invalid");
    }

    // Validate special caracteres 
    var numbers = /(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})/g;
    if(myInput.value.match(numbers)) {  
        special.classList.remove("invalid");
        special.classList.add("valid");
    } else {
        special.classList.remove("valid");
        special.classList.add("invalid");
    }

        
    // Validate number of caracteres
    var numbers = /([^]){8}/g;
    if(myInput.value.match(numbers)) {  
        caracterNumb.classList.remove("invalid");
        caracterNumb.classList.add("valid");
    } else {
        caracterNumb.classList.remove("valid");
        caracterNumb.classList.add("invalid");
    }
}




//Getting random users
document.getElementById('getRandom').addEventListener('click', getRandom);

function getRandom(){
    fetch('https://randomuser.me/api/?results=5')
    .then((res) => res.json())
    .then((data) => {
        let author = data.results;
        let output = ' </br></br></br>'
        console.log(data);
        author.forEach(function(user){
            output += `
            <div class="randon">
               
                <img src="${user.picture.medium}">
                <h4>${user.name.first} ${user.name.last}</h4>
                <h4>${user.email}</h4>
                <h4>${user.gender}</h4>
                <h4>${user.location.city}</h4>
                <h4>${user.phone}</h4>
                </br></br></br> 
              
            </div>
            `;
        });

        document.getElementById('output').innerHTML = output;

    })

}




//calculating the starters prices    
let totalValue = [];    
    
var total_items=3;

    function CalculateItemsValue(){
        var total=0;
        for(let i=1; i <= total_items; i++){
            itemID = document.getElementById("qtd_" + i);
            total = total + parseInt(itemID.value) * parseInt(itemID.
            getAttribute("data-price"));  

        }
        document.getElementById('ItemsTotal').innerHTML = "$" + total;
        totalValue[0] = total;
    }

    document.querySelectorAll('[id^="qtd_"]').forEach(item => {
        item.addEventListener("keyup", CalculateItemsValue)
    })

//calculating the main prices  
var total_main=4;

    function CalculateItemsMainValue(){
        var total=0;
        for(let i=1; i <= total_main; i++){
            itemID = document.getElementById("main_" + i);
            total = total + parseInt(itemID.value) * parseInt(itemID.
            getAttribute("data-mainPrice"));  

        }
        document.getElementById('ItemsMainTotal').innerHTML = "$" + total;
        totalValue[1] = total;
    }

    document.querySelectorAll('[id^="main_"]').forEach(item => {
        item.addEventListener("keyup", CalculateItemsMainValue)
    })

//calculating the main veg prices  
var total_mainveg=1;

    function CalculateItemsVegValue(){
        var total=0;
        for(let i=1; i <= total_mainveg; i++){
            itemID = document.getElementById("main_" + i);
            total = total + parseInt(itemID.value) * parseInt(itemID.
            getAttribute("data-mainPrice"));  

        }
        document.getElementById('Veg_Food').innerHTML = "$" + total;
        totalValue[1] = total;
    }

    document.querySelectorAll('[id^="main_"]').forEach(item => {
        item.addEventListener("keyup", CalculateItemsVegValue)
    })

//calculating the non veg prices  
var total_mainNonveg=4;

    function CalculateItemsNonVegValue(){
        var total=0;
        for(let i=2; i <= total_mainNonveg; i++){
            itemID = document.getElementById("main_" + i);
            total = total + parseInt(itemID.value) * parseInt(itemID.
            getAttribute("data-mainPrice"));  

        }
        document.getElementById('NonVeg_Food').innerHTML = "$" + total;
        totalValue[1] = total;
    }

    document.querySelectorAll('[id^="main_"]').forEach(item => {
        item.addEventListener("keyup", CalculateItemsNonVegValue)
    })

    
//calculating the dessert prices      
var total_dessert=3;

    function CalculateItemsDessertValue(){
        var total=0;
        for(let i=1; i <= total_dessert; i++){
            itemID = document.getElementById("dessert_" + i);
            total = total + parseInt(itemID.value) * parseInt(itemID.
            getAttribute("data-dessertPrice"));  

        }
        document.getElementById('ItemsDessertTotal').innerHTML = "$" + total;
        totalValue[2] = total;
    }

    document.querySelectorAll('[id^="dessert_"]').forEach(item => {
        item.addEventListener("keyup", CalculateItemsDessertValue)
    })

//calculating the drinks prices      
var total_drink=3;
    function CalculateItemsDrinkValue(){
        var total=0;
        for(let i=1; i <= total_drink; i++){
            itemID = document.getElementById("drink_" + i);
            total = total + parseInt(itemID.value) * parseInt(itemID.
            getAttribute("data-drinkPrice"));  

        }
        document.getElementById('ItemsDrinkTotal').innerHTML = "$" + total;
        totalValue.push(total);
    }

    document.querySelectorAll('[id^="drink_"]').forEach(item => {
        item.addEventListener("keyup", CalculateItemsDrinkValue)
    })    

     
    
function CalculateTotalBill(){
      
    document.getElementById('BillTotal').innerHTML = "$" + '10';
}

 

//slide of images
let time = 3000,

currentImageIndex = 0,
images = document.querySelectorAll ("#slider img")
max = images.length;


function nextImage() {

  images[currentImageIndex].classList.remove("selected")

  currentImageIndex++;

  if (currentImageIndex >= max) 
  currentImageIndex = 0;

  images[currentImageIndex].classList.add("selected")

}


function start () {

  setInterval(() => {

    //troca de imagem
    nextImage()

  }, time)
}

window.addEventListener("load", start)


//jQuery example
$(document).ready(function() {
    $('#hide').click(function() {
      $("p").toggle();
    });
    $('#show').click(function(){
        $('p').show();
    })

})

