import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtnEl = document.querySelector('[data-start]');
const dateTimePickerEl = document.querySelector('input#datetime-picker');

const timeEl = document.querySelectorAll('.field >.value');

startBtnEl.addEventListener('click', handleStartBtn);

startBtnEl.setAttribute('disabled', true);
startBtnEl.style.background = 'aliceblue';
startBtnEl.style.color = '#818190';
const date = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] > date) {
      startBtnEl.removeAttribute('disabled');
      startBtnEl.style.background = '#4141e8';
      startBtnEl.style.color = 'white';
      return;
    }
    Notiflix.Report.failure('Please choose a date in the future');
  },
};

flatpickr(dateTimePickerEl, options);

function handleStartBtn(event) {
  startBtnEl.setAttribute('disabled', true);
  startBtnEl.style.color = '#818190';
  startBtnEl.style.background = 'aliceblue';
  startBtnEl.style.opacity = '0';
  dateTimePickerEl.setAttribute('disabled', true);
  const endDate = new Date(dateTimePickerEl.value);
  let time = endDate - date;

  innerEl(timeEl, convertMs(time));

  const interval = setInterval(() => {
    if (time <= 1000) {
      clearInterval(interval);
      startBtnEl.style.opacity = '1';
      dateTimePickerEl.removeAttribute('disabled');
      return;
    }

    time = time - 1000;
    console.log('відлік часу', convertMs(time));
    innerEl(timeEl, convertMs(time));
  }, 1000);
}
function innerEl(timeEl, time) {
  timeEl.forEach(el => {
    el.textContent = addLeadingZero(time[Object.keys(el.dataset)]);
  });
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

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

  return { days, hours, minutes, seconds };
}
