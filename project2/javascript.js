let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // to stop default action ( to stop submiting the value to the server )
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let results = document.querySelector("#results");
  let range = document.querySelector("#range");

  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please add valid height ${height}`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please add valid weight ${weight}`;
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi <= 18.6) {
      range.innerHTML = `You are underweight ${bmi}`;
    } else if ((bmi >= 18.6 && bmi <= 24.9)) {
      range.innerHTML = `You have normal weight ${bmi}`;
    } else {
      range.innerHTML = `You are overweight ${bmi}`;
    }
  }
});
