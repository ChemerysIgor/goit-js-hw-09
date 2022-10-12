import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const input = document.querySelector(`input#datetime-picker`);
const startBtn = document.querySelector(`button[data-start]`);
const days = document.querySelector(`span[data-days]`);
const hours = document.querySelector(`span[data-hours]`);
const minutes = document.querySelector(`span[data-minutes]`);
const seconds = document.querySelector(`span[data-seconds]`);
const field = document.querySelector(`.field`);
startBtn.disabled = true;

let ms;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      let currentDate = new Date();
      console.log(currentDate.getTime())
      const date = selectedDates[0]
      console.log(date.getTime())
         if (date < currentDate){
          Notiflix.Report.failure('Attention', 'Please choose a date in the future', 'Choose');
        return};  
        console.log("currentDate: ", currentDate);
        console.log('selectedDates[0] : ', selectedDates[0]);
        startBtn.disabled = false;
        startBtn.addEventListener(`click`, onStartBtn);  
        } 
            } 

  

  const dataPicker = new flatpickr(input, options); 
 

          function onStartBtn (){
            const timerId = setInterval(() => {
              startBtn.disabled = true;

            let currentDate = new Date();
            ms =  dataPicker.selectedDates[0] - currentDate;
            console.log (ms);
            const timeCounter =  convertMs(ms);
            console.dir (timeCounter);
            
            function addLeadingZero (timeItem) {
              return timeItem.toString().padStart(2, '0');
           }
            

            days.textContent = addLeadingZero(timeCounter.days);
            hours.textContent = addLeadingZero(timeCounter.hours);
            minutes.textContent = addLeadingZero(timeCounter.minutes);
            seconds.textContent = addLeadingZero(timeCounter.seconds);
          if (
            timeCounter.days.days === 0 && timeCounter.days.hours === 0 
            && timeCounter.days.minutes === 0 && timeCounter.days.seconds === 0){
          
          clearInterval(timerId)}
          }
          , 1000);
        }
          //  function addLeadingZero(value){value.padStart(2,0)};

    function convertMs(ms) { 
     // Number of milliseconds per unit of time
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
    
      // Remaining days
      const days = Math.floor(ms / day);
      // Remaining hours
      const hours = Math.floor((ms % day) / hour);
      // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
      // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);
   //  console.log({ days, hours, minutes, seconds })
   console.log({ days, hours, minutes, seconds })
      return { days, hours, minutes, seconds };
      //   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
      //   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
      //   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
       }
      //  field.style.flexDirection = flex;
          
          
