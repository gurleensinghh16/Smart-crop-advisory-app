function cropGuide() {
  let season = document.getElementById("season").value;
  document.getElementById("cropResult").innerText =
    season === "Rabi"
      ? "✅ Recommended Crop: Wheat"
      : "✅ Recommended Crop: Rice";
}
