/*
// Variables related to changing the page title (h1)
const myHeading = document.querySelector('h1');
const origText = myHeading.textContent;
const newText = "Hello world!";
const attrName = "style";
const origStyle = myHeading.getAttribute(attrName);
const newStyle = "color: purple"

myHeading.onclick = onclick_handler;

function onclick_handler() {
    if(this.textContent === origText) {
        this.textContent = newText;
        this.setAttribute(attrName, newStyle);
    }
    else {
        this.textContent = origText;
        this.setAttribute(attrName, origStyle);
    }
}
*/

// Variables related to changing the image
const myImage = document.querySelector("img");
const imgAttrName = "src";
const imgSecondaryAttrName = "alt";
const origImg = myImage.getAttribute(imgAttrName);
const origAlt = myImage.getAttribute(imgSecondaryAttrName);
const newImg = "images/milky-way-01.jpg";
const newAlt = "Mars";

myImage.onclick = img_onclick_handler;

function img_onclick_handler() {
    if(this.getAttribute(imgAttrName) === origImg) {
        this.setAttribute(imgAttrName, newImg);
        this.setAttribute(imgSecondaryAttrName, newAlt);
    }
    else {
        this.setAttribute(imgAttrName, origImg);
        this.setAttribute(imgSecondaryAttrName, origAlt);
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

myButton.onclick = function() {
    setUserName();
}
  
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

/* Some example code...
if(myHeading.textContent === 'Hello world!') {
    alert("Voia!")
}
*/