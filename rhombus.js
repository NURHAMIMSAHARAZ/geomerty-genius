function calculateRhombus() {
  const d1 = +document.getElementById("rhombusD1").value;
  const d2 = +document.getElementById("rhombusD2").value;
  const area = 0.5 * d1 * d2;
  document.getElementById("rhombusResult").innerText = "Area: " + area;
}