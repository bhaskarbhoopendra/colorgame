let numSquares=6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".squares");
let pickedColor =pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector("#message");
let heading = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons= document.querySelectorAll(".mode");

for(let i=0 ;i<modeButtons.length;i++){
  modeButtons[i].addEventListener("click",function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add('selected');

    this.textContent==="Easy" ? numSquares=3 :numSquares=6;
     reset();
  })
}

function reset(){
  colors= generateRandomColors(numSquares);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  messageDisplay.textContent="";
  resetButton.textContent="New Colors";
  for(var i=0;i<squares.length;i++){
    if(colors[i]){
      squares[i].style.display="block";
      squares[i].style.backgroundColor=colors[i];
    }else{
      squares[i].style.display="none";
    }
    squares[i].style.backgroundColor=colors[i];
    heading.style.backgroundColor="steelBlue";
    resetButton.textContent="New Colors";
  }
}

resetButton.addEventListener("click",function(){
reset();
})

colorDisplay.textContent= pickedColor;

for(var i= 0 ;i<squares.length; i++){
  // setting the colors
   squares[i].style.backgroundColor=colors[i];
   // adding the click evnes
   squares[i].addEventListener("click",function(){
    let clickedColor = this.style.backgroundColor;
     if(clickedColor===pickedColor){
       messageDisplay.textContent="Correct";
       changeColor(clickedColor);
       heading.style.backgroundColor=clickedColor;
       resetButton.textContent="Play Again?"
     }else{
       this.style.backgroundColor="#232323";
       messageDisplay.textContent="Try Again";
     }
   });
}

function changeColor(color){
  // loop through the sqaures of div
  for(var i=0; i<squares.length;i++){
    squares[i].style.backgroundColor=color;
  }
}
function pickColor(){
  var random =  Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateRandomColors(num){
// creating an empty array
  let arr =[];
  // pushing the random colors into the array
  for(let i=0;i<num;i++){
  arr.push(randomColor());
  }
  // returning the array
  return arr;
}

function randomColor(){
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  return "rgb("+r +", "+g +", "+b +")";
}
