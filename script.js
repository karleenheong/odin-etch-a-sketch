const container = document.querySelector("#container");
const promptBtn = document.querySelector("#promptBtn");

let numberOfSquares = 256;

buildGrid();

promptBtn.addEventListener("click", () => {
  let numSquaresPerSide = prompt("How many squares per side for the grid?");
  if(numSquaresPerSide > 100){
    numSquaresPerSide = 100;
  }
  numberOfSquares = numSquaresPerSide ** 2;
  //destroy grid
  removeAllChildNodes(container);
  
  buildGrid();
})

function removeAllChildNodes(parent){
  while(parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
}

function buildGrid(){
  for(let i=0; i<numberOfSquares; i++){
    const square = document.createElement("div");
    // square.style.backgroundColor = "blue";
    //square.style.border = "black solid 1px";
    let side = (960/(Math.sqrt(numberOfSquares))).toString();
    square.style.height = side+"px";
    square.style.width = side+"px";
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "blue";
    })
    container.appendChild(square);
  }
}



