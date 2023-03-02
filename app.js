const feet = document.getElementById('feet');
const inches = document.getElementById('inches');
const weight = document.getElementById('weight');
const bmiTotal = document.getElementById('bmi-total');
const weightRating = document.getElementById('weight-rating');

function formula(feetAndInches, weightValue) {
    let feetInInches = parseFloat(feet.value) * 12;
    var feetAndInches = feetInInches + parseFloat(inches.value);
    var weightValue = parseFloat(weight.value);

    let bmi = (weightValue / Math.pow(feetAndInches, 2)) * 703
    
    console.log(weightValue);
    console.log(feetAndInches);
    console.log(bmi);
    console.log(bmi.toFixed(1));
    
    bmiTotal.textContent = "Your BMI is " + bmi.toFixed(1);

    if (parseFloat(bmi.toFixed(1)) < 18.5) {
        weightRating.textContent = "You are underweight"
    } else if (parseFloat(bmi.toFixed(1)) >= 18.5 && parseFloat(bmi.toFixed(1)) <= 24.9) {
        weightRating.textContent = "You are normal weight"
    } else if (parseFloat(bmi.toFixed(1)) >= 25 && parseFloat(bmi.toFixed(1)) <= 29.9) {
        weightRating.textContent = "You are overweight"
    } else if (parseFloat(bmi.toFixed(1)) >= 30) {
        weightRating.textContent = "You are obese"
    }
}

document.addEventListener('submit', (e) => {
    e.preventDefault();
})

    