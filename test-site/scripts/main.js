var myImage = document.querySelector('img')

myImage.onclick = function(){
  var mySrc = myImage.getAttribute('src')
  if(mySrc === 'images/tinkerbell.png'){
    myImage.setAttribute ('src', 'images/tinkerbell-r.png')
  } else {
    myImage.setAttribute('src', 'images/tinkerbell.png')
  }
}

var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')

function setUserName(){
  var myName = prompt('Please enter your name')
  localStorage.setItem('name', myName)
  myHeading.textContent = 'Mozilla is cool, ' + myName
}
if(!localStorage.getItem('name')){
  setUserName()
} else {
  var storedName = localStorage.getItem('name')
  myHeading.textContent = 'You can tinker too ' + storedName
}
myButton.onclick = function() {
  setUserName()
}
