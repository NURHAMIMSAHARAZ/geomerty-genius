  function rectangle() {
const length = +document.getElementById("length").value;
      const width  = +document.getElementById("width").value;

      const area = length * width;
      const perimeter = 2 * (length + width);

      document.getElementById("rectangleResult").innerText =
        "Area: " + area + " | Perimeter: " + perimeter;
  }