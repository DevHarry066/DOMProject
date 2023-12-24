const clock = document.querySelector('#clock');

setInterval(function () {
  const currentDate = new Date();
  clock.innerHTML = 
`${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
}, 1000);
