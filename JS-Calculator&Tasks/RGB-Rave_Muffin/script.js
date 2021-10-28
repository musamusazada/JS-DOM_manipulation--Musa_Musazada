const wrapper = document.querySelector(".wrapper");
const singButton = document.querySelector("#sing");
const stopButton = document.querySelector("#stop");
let randomize;
singButton.addEventListener('click', () => {
    PlaySound('mySound');
    randomize = setInterval(function() {
        bgcolor = `rgb(${Math.round(Math.random()*255)} ,${Math.round(Math.random()*255)} ,${Math.round(Math.random()*255)})`;
        txtcolor = `rgb(${Math.round(Math.random()*255)} ,${Math.round(Math.random()*255)} ,${Math.round(Math.random()*255)})`;
        wrapper.style.backgroundColor = bgcolor;
        wrapper.style.color = txtcolor;
    }, 100);
})
stopButton.addEventListener('click', () => {
    StopSound('mySound');
    clearInterval(randomize);
})