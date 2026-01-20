function calculate() {
  let crop = document.getElementById("cropType").value;
  let land = document.getElementById("land").value || 1;

  document.getElementById("calcResult").innerText =
`Crop: ${crop}
Land: ${land} acres
Seeds: ${land * 25} kg
Water: ${land * 2000} liters
Fertilizer: ${land * 50} kg`;
}
