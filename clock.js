const hour_hand = document.querySelector(".hour_hand");
const minute_hand = document.querySelector(".minute_hand");
const second_hand = document.querySelector(".second_hand");
const setDate = () => {
  const now = new Date();
  //   console.log(second);
  const second = (now.getSeconds() / 60) * 360 + 90;
  if (second == 90) {
    second_hand.style.transition = "0s";
  } else {
    second_hand.style.transition = "0.6s";
    second_hand.style.transitionTimingFunction =
      "cubic-bezier(0.46, 2.09, 0.58, 1)";
  }
  second_hand.style.transform = `rotate(${second}deg)`;
  const minute = (now.getMinutes() / 60) * 360 + 90;
  if (minute == 90) {
    minute_hand.style.transition = "0s";
  } else {
    minute_hand.style.transition = "0.6s";
    minute_hand.style.transitionTimingFunction =
      "cubic-bezier(0.46, 2.09, 0.58, 1)";
  }
  minute_hand.style.transform = `rotate(${minute}deg)`;
  const hour = (now.getHours() / 12) * 360 + 90;
  hour_hand.style.transform = `rotate(${hour}deg)`;
};
setInterval(setDate, 1000);
const now = new Date();
console.log(now);
