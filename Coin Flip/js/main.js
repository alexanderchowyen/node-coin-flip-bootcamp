console.log('50 cent');
const heads = document.querySelector("#heads")
const tails = document.querySelector("#tails")
const h1 = document.querySelector("h1")
setTimeout(()=>{
  setUp(heads) 
  setUp(tails)
},1500)
function setUp(button){
  button.addEventListener('click', function(){
  console.log("the button works!")
  fetch(`/api?word=${button.id}`)
  .then(response => response.json())
  .then((data) => {
    console.log("server response", data.info);
    if(data.info){
      h1.innerHTML = "You Won"
    }else{
      h1.innerHTML = "You Lost "
    }
  });
})
}
