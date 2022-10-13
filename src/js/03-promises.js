import Notiflix from "notiflix";

let promiseId = null;


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    promiseId = setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay }); 
      }
    }, delay);
  });
}

const  form = document.querySelector(`.form`);
const submit = document.querySelector(`button`);
form.addEventListener('submit', onClick);

function onClick(event) {
  event.preventDefault();

const delay = Number (document.querySelector(`input[name=delay]`).value); 
console.log(delay)
const step = Number (document.querySelector(`input[name=step]`).value);
console.log(step)
const amount = Number (document.querySelector(`input[name=amount]`).value);
console.log(amount)



  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, delay + step * i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  event.currentTarget.reset();
  
}

