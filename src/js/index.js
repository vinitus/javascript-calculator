function App() {
  const $digits = document.querySelector('.digits');
  const $total = document.querySelector('#total');

  const updateTotalDisplay = (e) => {
    if (e.target.classList.contains('digit')) {
      const currentTotal = $total.innerText;
      $total.innerText = currentTotal === '0' ? e.target.innerText : currentTotal + e.target.innerText;
    }
  };

  $digits.addEventListener('click', updateTotalDisplay);
}

App();
