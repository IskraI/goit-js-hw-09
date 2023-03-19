import Notiflix from 'notiflix';
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', handlePromise);

function handlePromise(event) {
  event.preventDefault();

  const params = {
    delay: Number(event.currentTarget.elements.delay.value),
    step: Number(event.currentTarget.elements.step.value),
    amount: event.currentTarget.elements.amount.value,
  };

  const { delay, step, amount } = params;
  let delayStep = delay;
  for (let position = 1; position <= amount; position += 1) {
    // console.log(delayStep);
    createPromise(position, delayStep)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.warning(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delayStep = delayStep + step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}
