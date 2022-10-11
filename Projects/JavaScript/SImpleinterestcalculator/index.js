function show_value(x) {
    document.getElementById("slider_value").innerHTML = x + "%";
  }
  function increment() {
    document.getElementById("rate").value =
      parseFloat(document.getElementById("rate").value) + 0.1;
    x = parseFloat(document.getElementById("rate").value);
    document.getElementById("slider_value").innerHTML = x + "%";
  }
  function decrement() {
    document.getElementById("rate").value =
      parseFloat(document.getElementById("rate").value) - 0.1;
    x = parseFloat(document.getElementById("rate").value);
    document.getElementById("slider_value").innerHTML = x + "%";
  }
  
  function compute() {
    p = document.getElementById("principal").value;
    r = parseFloat(document.getElementById("rate").value);
    y = document.getElementById("years").value;
    i = (p * r * y) / 100;
    y1 = new Date().getFullYear();
    y2 = parseInt(y) + y1;
    result = document.getElementById("result");
    if (p <= 0) {
      alert(
        "Alert !!! \n" + "Please enter a positive number as the principal amount."
      );
      document.getElementById("principal").focus();
    } else {
      result.innerHTML =
        "If you deposit <mark>" +
        p +
        "</mark>,\nat an interest rate of <mark>" +
        r +
        "%</mark>.\nYou will recieve an amount of <mark>" +
        i +
        "</mark>,\nin the year <mark>" +
        y2+"</mark>";
    }
  }