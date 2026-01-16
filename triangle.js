 function area() {
    let base = document.getElementById("base").value;
    let height = document.getElementById("height").value;

    let area = 0.5 * base * height;

    document.getElementById("result").innerText = area;
  }