var myInput = document.getElementById("credit");
var number = document.getElementById("number");
var length = document.getElementById("length");

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

