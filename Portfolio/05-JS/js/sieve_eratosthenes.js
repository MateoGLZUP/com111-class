function sieve(n) {
  var array = new Array(n + 1).fill(true);
  var primes = [];

  array[0] = array[1] = false; // 0 and 1 are not prime numbers

  for (var i = 2; i <= Math.sqrt(n); i++) {
      if (array[i]) {
          for (var j = i * i; j <= n; j += i) {
              array[j] = false; // Mark multiples of i as non-prime
          }
      }
  }

  for (var i = 2; i <= n; i++) {
      if (array[i]) {
          primes.push(i);
      }
  }

  return primes;
}

function showPrimes() {
  var num = parseInt(document.getElementById("num").value);

  if (isNaN(num) || num < 2) {
      document.getElementById("primes").innerText = "Please enter a valid number greater than 1.";
      return;
  }

  var primes = sieve(num);
  document.getElementById("primes").innerText = primes.join(", ");
}

window.onload = function () {
  document.getElementById("btn").onclick = showPrimes;
};
