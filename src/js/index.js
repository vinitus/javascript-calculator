function App() {
  handlingDigitButtonClick();

  const $operations = document.querySelector('.operations');
  const $total = document.querySelector('#total');

  $operations.addEventListener('click', (e) => {
    if (!e.target.classList.contains('operation')) return;

    $total.innerText += e.target.innerText;
  });
}

App();

function handlingDigitButtonClick() {
  const $digits = document.querySelector('.digits');
  const $total = document.querySelector('#total');

  const updateTotalDisplay = (e) => {
    if (!e.target.classList.contains('digit')) return;

    const currentTotal = $total.innerText;
    const newDigit = e.target.innerText;

    $total.innerText = currentTotal === '0' ? newDigit : currentTotal + newDigit;
  };

  $digits.addEventListener('click', updateTotalDisplay);
}
