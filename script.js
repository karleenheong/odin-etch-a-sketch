const container = document.querySelector("#container");

//create 16 x 16 divs
const NUMBER_OF_SQUARES = 256;

for(let i=0; i<NUMBER_OF_SQUARES; i++){
  const square = document.createElement("div");
  //square.style.backgroundColor = "blue";
  //square.style.margin = "3px";
  square.style.height = "50px";
  square.style.width = "50px";
  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "blue";
  })
  container.appendChild(square);
}