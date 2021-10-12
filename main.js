console.log('hey im linked up');
const button = document.querySelector("button")

button.addEventListener('click', function(){
  console.log("the button works!")
  let word = document.querySelector('#word').value
  if (word === ""){
    document.querySelector("h1").innerHTML= "no text not a palimdrome"
    return 
  }
  fetch(`/api?word=${word}`)
  .then(response => response.json())
  .then((data) => {
    console.log("server response", data.isPalin);
  });
  if (data.isPalin){
    console.log('palindrome')
    document.querySelector("h1").innerHTML= "palindrome"
  }
  else {
    console.log('not a palindrome')
    document.querySelector("h1").innerHTML= "not a palindrome"
  }
})
// palindrome works. need to figure out back end work 
// works through server shows palindrome in console and has server response to return palindrome also. 



