const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let loadingNumber = 0;
let countingInterval = setInterval(showBlurring, 30);

function showBlurring() {
  loadingNumber++;
  if (loadingNumber > 99) {
    clearInterval(countingInterval);
  }
  loadText.innerText = `${loadingNumber}%`;
  loadText.style.opacity = `${scale(loadingNumber, 0, 100, 1, 0)}`;
  bg.style.filter = `blur(${scale(loadingNumber, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
