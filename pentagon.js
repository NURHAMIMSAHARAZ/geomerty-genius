function calculatePentagon() {
  const s = +document.getElementById("pentagonSide").value;
  const area = 0.25 * Math.sqrt(25 + 10 * Math.sqrt(5)) * s * s;
  document.getElementById("pentagonResult").innerText = "Area: " + area.toFixed(2);
}