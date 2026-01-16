function calculateEllipse() {
  const a = +document.getElementById("ellipseA").value;
  const b = +document.getElementById("ellipseB").value;
  const area = Math.PI * a * b;
  document.getElementById("ellipseResult").innerText = "Area: " + area.toFixed(2);


}