const clock = document.querySelector(".digitalClock");
const digitalClock = () => {
  const now = new Date();
  const merediem = dateFns.format(now, "A");
  //   const nonFormattedHours = now.getHours();
  const hours = dateFns.format(now, "HH");
  //   const nonFormattedMinute = now.getMinutes();
  const minutes = dateFns.format(now, "mm");
  const seconds = dateFns.format(now, "ss");
  const html = `<span>${hours}:</span>
                <span>${minutes}:</span>
                <span>${seconds} </span>
                <span class="merediem"> ${merediem} </span>`;
  clock.innerHTML = html; //overwriting the html every second
};
setInterval(digitalClock, 1000);
