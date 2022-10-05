
const start = document.querySelector(`button[data-start]`);
const stop = document.querySelector(`button[data-stop]`);
start.classList.add("active");
let timerId = null;

start.addEventListener(`click`, onStart);
function onStart (event){
  if (start.classList.contains("active"))
  {   const body = document.querySelector(`body`);
         const getRandomHexColor = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      };
      timerId = setInterval(() =>{body.style.backgroundColor = getRandomHexColor()},1000);
      start.classList.remove("active");
    } 
 };
    stop.addEventListener(`click`, onStop); 
    function onStop (evt){      
            clearInterval(timerId);
            start.classList.add("active");}