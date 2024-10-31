var memo = {};

function fibonacci() {
  "use strict";
  var n = parseInt(document.getElementById("num").value);

  if (isNaN(n) || n < 0) {
    document.getElementById("fibonacciLbl").innerText = "Please enter a valid non-negative number.";
    return;
  }

  var val = f(n);
  document.getElementById("fibonacciLbl").innerText = "Fibonacci of " + n + " is " + val;
  return val;
}

function f(n) {
  var value;

  if (memo.hasOwnProperty(n)) {
    value = memo[n];
  } else {
    if (n <= 1) {
      value = n;
    } else {
      value = f(n - 1) + f(n - 2);
    }

    memo[n] = value;
  }

  return value;
}

window.onload = function () {
  document.getElementById("btn").addEventListener("click", fibonacci);
};
