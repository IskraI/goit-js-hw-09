const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

const DELAY = 1000;
startBtnEl.addEventListener('click', startChangeBcg);
stopBtnEl.addEventListener('click', stopChangeBcg);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function startChangeBcg() {
  startBtnEl.setAttribute('disabled', true);

  const chageBcgSet = setInterval(() => {
    if (!startBtnEl.hasAttribute('disabled')) {
      clearInterval(chageBcgSet);
      return;
    }
    const colorRandom = getRandomHexColor();
    bodyEl.style.background = colorRandom;
  }, DELAY);
}
function stopChangeBcg() {
  startBtnEl.removeAttribute('disabled');
}
