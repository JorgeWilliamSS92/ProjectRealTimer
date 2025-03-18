let h1 = document.getElementsByClassName("container__clock--timer")[0];

function updateTime() {
  const date = new Date();
  let hours = date.getHours();
  const meridiem = hours > 12 ? "PM" : "AM";

  hours = hours.toString().padStart(2, 0);
  let minute = date.getMinutes().toString().padStart(2, 0);
  let second = date.getSeconds().toString().padStart(2, 0);
  const time = `${hours}:${minute}:${second} ${meridiem}`;

  h1.textContent = time;
}

updateTime();
setInterval(updateTime, 1000);
