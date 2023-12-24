const buttonClick = document.querySelector('#calcBMI');
buttonClick.addEventListener('click', function (e) {
  e.preventDefault();
  const height = document.querySelector('#height').value;
  let results = document.querySelector('#results');
  const weight = document.querySelector('#weight').value;
  let bmiFormula =
    (parseInt(weight) * 100) /
    (((parseInt(height) / 10) * parseInt(height)) / 10);
  results.innerHTML = bmiFormula.toFixed(2);
  if (bmiFormula > 24.9) {
    results.innerHTML += ' Overweight';
  }
  if (bmiFormula > 18.6 && bmiFormula < 24.9) {
    results.innerHTML += ' Normal Range';
  }
  if (bmiFormula < 18.6) {
    results.innerHTML += ' Under weight';
  }
});
