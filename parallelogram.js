function calculateParallelogram() {
  const base = +document.getElementById("paraBase").value;
  const height = +document.getElementById("paraHeight").value;
  const area = base * height;
  document.getElementById("paraResult").innerText = "Area: " + area;
}