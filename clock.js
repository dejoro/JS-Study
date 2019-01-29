const clock = document.querySelector(".clock");

console.log(clock);

function getTime() {
   const clockData = new Date();
   const seconds = clockData.getSeconds();
   const minutes = clockData.getMinutes();
   const hours = clockData.getHours();
   const time = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
   clock.innerHTML = time;
   return;
}

function init() {
   getTime();
   setInterval(getTime, 1000);
   return;
}

init();