// Script for Area of Triangle

// Elements
const baseInput = document.getElementById('baseInput');
const heightInput = document.getElementById('heightInput');
const areaResult = document.getElementById('AreaResult');

// Calculate Button
const calculateBtn = document.getElementById('CalculateBtn');

// Code for calculating area and perimeter
function Calculate() {

  // Get Inputs
  let base = Number(baseInput.value);
  let height = Number(heightInput.value);

  // Calculate Area of Triangle using Formula
  let area = base * height * 0.5

  // Round up to 2 decimal places, if needed
  if (area % 1 != 0) {
    area = area.toFixed(2)
  }

  // Display Result
  areaResult.innerHTML = "" + area + " m<sup>2</sup>"
  return
}

// Connect input change to the Calculate() function
baseInput.oninput = Calculate
heightInput.oninput = Calculate

// Connect button click to the Calculate() function, 
// redundant due to above code
calculateBtn.onclick = Calculate

// Initial Calculate() call
Calculate()