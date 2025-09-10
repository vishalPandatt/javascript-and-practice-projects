const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

                                                        // Color Generator

const btn = document.querySelector(".random");
btn.addEventListener("click",function(){
  let h3 = document.querySelector("h3");
  let randomColor= getRandomColor();
  h3.innerText = randomColor;

  let div = document.querySelector(".colorr");
  div.style.backgroundColor = randomColor;
  console.log("color Updated!");
})

function getRandomColor(){
  let red = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);

  let color = `rgb(${red},${green},${blue})`;
  return color;
}
