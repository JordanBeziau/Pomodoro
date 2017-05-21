document.addEventListener('DOMContentLoaded', () => {

  let time = 1499,
    count = 0,
    seconds, minutes;

  const controlButton = document.getElementById('control-button'),
    timeContainer = document.querySelector('time'),
    title = document.querySelector('title'),
    button = document.querySelector('.control');
  let controlButtonCheck = true;
  let pomodoro;

  const startPomodoro = () => {
    if (time == 0) {
      if (count == 8) {
        time = 900;
        count = 1;
      }
      else if (count % 2 == 0) {
        time = 300;
        count++;
      }
      else {
        time = 1500;
        count++;
      }
    }

    getTime(time);

    time--;
  };

  function getTime (time) {
    seconds = time % 60;
    time /= 60;
    minutes = Math.floor(time % 60);
    seconds <= 9 ? seconds = `0${seconds}` : '';
    minutes <= 9 ? minutes = `0${minutes}` : '';
    title.innerHTML = `Pomodoro - ${minutes} : ${seconds}`;
    timeContainer.innerHTML = `${minutes} : ${seconds}`;
  }

  controlButton.addEventListener('mouseup', () => {
    controlButtonCheck ? pomodoro = setInterval(startPomodoro, 1000) : clearInterval(pomodoro);
    controlButtonCheck ? button.className = 'control pause' : button.className = 'control play';
    controlButtonCheck = !controlButtonCheck;
  });

});
