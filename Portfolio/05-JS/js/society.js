var myGamePieces = [];
var happySrc = "./images/smiley.gif";
var sadSrc = "./images/angry.gif";
var maxDist = 50;

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function component(width, height, color, x, y, type, isHappy) {
  this.type = type;
  this.isHappy = isHappy;
  this.happyPoints = isHappy ? 1 : -1;
  if (type == "image") {
    this.image = new Image();
    this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.speedX = Math.random() * 4 - 2; // Random speed between -2 and 2
  this.speedY = Math.random() * 4 - 2;
  this.x = x;
  this.y = y;

  this.update = function () {
    ctx = myGameArea.context;
    if (type == "image") {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    ctx.fillText(this.happyPoints, this.x, this.y + 5);
  };

  this.newPos = function () {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bouncing logic
    if (this.x >= myGameArea.canvas.width - this.width || this.x <= 0) {
      this.speedX = -this.speedX;
    }
    if (this.y >= myGameArea.canvas.height - this.height || this.y <= 0) {
      this.speedY = -this.speedY;
    }
  };

  this.checkSurroundings = function (other) {
    var dx = this.x - other.x;
    var dy = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy); // Euclidean distance
  };

  this.moreHappy = function () {
    this.happyPoints++;
    if (this.happyPoints > 1 && !this.isHappy) {
      this.isHappy = true;
      this.image.src = happySrc;
    }
  };

  this.lessHappy = function () {
    this.happyPoints--;
    if (this.happyPoints < 0 && this.isHappy) {
      this.isHappy = false;
      this.image.src = sadSrc;
    }
  };
}

function startGame() {
  var n = parseInt(document.getElementById("num").value);
  var m = parseInt(document.getElementById("sad").value);

  if (m > n) {
    window.alert("Cannot have more sad individuals than total individuals.");
    return;
  }

  myGamePieces = []; // Clear the array for a new game

  for (var i = 0; i < n; i++) {
    var x = Math.random() * myGameArea.canvas.width;
    var y = Math.random() * myGameArea.canvas.height;
    var isHappy = (i >= m); // First 'm' will be sad
    var gamePiece = new component(30, 30, isHappy ? happySrc : sadSrc, x, y, "image", isHappy);
    myGamePieces.push(gamePiece);
  }
  myGameArea.start();
}

function updateGameArea() {
  myGameArea.clear();

  var happyCount = 0;
  var sadCount = 0;

  // Update positions and draw individuals
  for (var i = 0; i < myGamePieces.length; i++) {
    var currentPiece = myGamePieces[i];
    currentPiece.newPos();
    currentPiece.update();
  }

  // Check interaction between individuals
  for (var i = 0; i < myGamePieces.length; i++) {
    var currentPiece = myGamePieces[i];
    for (var j = i + 1; j < myGamePieces.length; j++) {
      var otherPiece = myGamePieces[j];
      var distance = currentPiece.checkSurroundings(otherPiece);
      if (distance < maxDist) {
        if (otherPiece.isHappy) {
          currentPiece.moreHappy();
        } else {
          currentPiece.lessHappy();
        }
      }
    }

    // Track happy and sad counts
    if (currentPiece.isHappy) {
      happyCount++;
    } else {
      sadCount++;
    }
  }

  document.getElementById("happyIndividuals").textContent = "Happy: " + happyCount;
  document.getElementById("sadIndividuals").textContent = "Sad: " + sadCount;

  // Stop game if everyone is happy or sad
  if (happyCount === 0 || sadCount === 0) {
    clearInterval(myGameArea.interval);
    var msg = happyCount === 0 ? "Absolute sadness... SAD!" : "Absolute happiness reached... Hurray!!";
    document.getElementById("timer").textContent = "Game Over: " + msg;
  }
}
