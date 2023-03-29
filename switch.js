const switchButton = document.querySelectorAll(".switch_button");
const digitalClockWrapper = document.querySelector(
  ".wrapper_for_digital_clock_container"
);
const analogClockWrapper = document.querySelector(
  ".wrapper_for_analog_clock_container"
);
console.log(switchButton);
switchButton.forEach((button) =>
  button.addEventListener("click", () => {
    console.log("button clicked");

    if (digitalClockWrapper.classList.contains("open")) {
      console.log("dans l if ");
      digitalClockWrapper.classList.remove("open");
      analogClockWrapper.classList.add("open");
    } else {
      digitalClockWrapper.classList.add("open");
      analogClockWrapper.classList.remove("open");
    }
  })
);
