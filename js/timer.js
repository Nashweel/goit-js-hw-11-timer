new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2019'),
  });

  const refs = {
  Days: document.querySelector('.value[data-value="days"]'),
  Hours: document.querySelector('.value[data-value="hours"]'),
  Mins: document.querySelector('.value[data-value="mins"]'),
  Secs: document.querySelector('.value[data-value="secs"]')
  };

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
