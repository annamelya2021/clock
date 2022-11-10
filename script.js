const refs = {
  dateDay: document.querySelector(".date-day"),
  date: document.querySelector(".date"),
  dateMonth: document.querySelector(".date-month"),
  dateYear: document.querySelector(".date-year"),
  clock: document.querySelector(".digital-clock"),
  seconds: document.querySelector(".clock-seconds__arrow"),
  minutes: document.querySelector(".clock-minutes__arrow"),
  hours: document.querySelector(".clock-hours__arrow"),
};

const namesOfDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "Пятниця",
  "Субота",
];
const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

setInterval(() => {
  const currentTime = new Date();
  const day = namesOfDay[currentTime.getDay()];
  const dayOfMonth = currentTime.getDate().toString().padStart(2, "0");
  const year = currentTime.getFullYear();
  const month = namesOfMonth[currentTime.getMonth()];

  refs.dateDay.textContent = day;
  refs.date.textContent = dayOfMonth;
  refs.dateMonth.textContent = month;
  refs.dateYear.textContent = year;

  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");

  refs.clock.textContent = `Поточний час: ${hours} : ${minutes} : ${seconds}`;

  console.log(refs.seconds);

  // seconds 360/60=6
  // minutes 360/60=6
  // hours   360/12=30
  const forSeconds = seconds * 6;
  const forMinutes = minutes * 6;
  const forHours = hours * 30 + minutes * 0.5; //(30/60) = 0.5

  refs.seconds.style.transform = `rotate(${forSeconds}deg)`;
  refs.minutes.style.transform = `rotate(${forMinutes}deg)`;
  refs.hours.style.transform = `rotate(${forHours}deg)`;
}, 1000);
