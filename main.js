// Write a function that generates a random password.
// write a function that generates random hexadecimal color codes

// q: shortcut for inserting all keyboard symbols on vs code
// a: alt + shift + p

var passwordEL = document.querySelector("#Password");

var length = 16;
var Lowercase = "abcdefghijklmnopqrstuvwxyz";
var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbols = "!@#$%^&*()_+";

var characters = Lowercase + Uppercase + number;

function generate() {
    var password = "";
    password += Lowercase[Math.floor(Math.random() * Lowercase.length)];
    password += Uppercase[Math.floor(Math.random() * Uppercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    passwordEL.value = password;
}

//function copyPassword() {
//    passwordEL.select();
//    document.execCommand("copy");
//   alert("Password copied to clipboard!");
//}

var LightEl = document.querySelector("#Light")
var colorEl = document.querySelector("#color");
var submitEl2 = document.querySelector("#submitEl2");
var color_text = document.querySelector("#color_text");

// Function to get the value of a CSS variable
function getCSSVariableValue(root) {
    return getComputedStyle(document.documentElement).getPropertyValue(root).trim();
  }
  
  // Usage
  const primaryColor = getCSSVariableValue('--primary-color');
  const secondaryColor = getCSSVariableValue('--secondary-color');
  
  console.log('Primary Color:', primaryColor); 
  console.log('Secondary Color:', secondaryColor); 
  


var dark;
var rotated;


function Light() {
    document.body.classList.toggle("dark-theme");
    dark = false;

    if (dark) {
      LightEl.src = "Light.png";
    } else {
      LightEl.src = "Dark.png"; 
    }

    if (rotated) {
      LightEl.style.transform = "rotate(40deg)";
      rotated = false;
    }
    else {
      LightEl.style.transform = "rotate(0deg)";
      rotated = !rotated;
  }
  }



function color() {
    var hex = "0123456789ABCDEF";
    var color = "#";
    

    for (var i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * hex.length)];
    }
    
    function change_text_color() {
        color_text.style.color = color;
    }

    function old_color() {
        color_text.style.color = secondaryColor;
    }

    color_text.addEventListener("mouseover", change_text_color);
    color_text.addEventListener("mouseout", old_color);

    function new_color() {
        color_text.style.color = primaryColor;
    }

    if (dark == true) {
        color_text.addEventListener("mouseout", new_color);
    }

    submitEl2.style.backgroundColor = color;
    colorEl.value = color;
    console.log(color);
}


console.log(submitEl2);

// q; how to make a shadow on text
// a: https://www.youtube.com/watch?v=9zBsdzdE4sM


