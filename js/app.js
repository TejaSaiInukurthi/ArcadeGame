// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.speed = speed;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + this.speed * dt;
  if (this.x > 500) {
    this.x = 0;
    this.speed = 100 + Math.floor((Math.random() * 150) + 1);
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y) {
  this.x = x;
  this.y = y;

  this.sprite = 'images/char-boy.png';
};

// update method for player
Player.prototype.update = function(dt) {
  if (player.y < 0) {
    count++;
    player.x = 205;
    player.y = 410;
  }

};

//render method for player
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


//life class to display lifes.
var Life = function(x) {
  this.x = x;
  this.y = 500;
  this.sprite = 'images/Heart.png';
}

Life.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

}

var lifes = new Life();
var allLifes = [];
var lives = 3;
for (var i = 0; i < lives; i++) {
  var x = i * 101;
  var lifes = new Life(x);
  allLifes.push(lifes);
}

var allEnemies = [];
var enemiesNum = 3;
var enemies = [60, 145, 230];
var speeds = [150, 180, 130];
var pos = [100, 0, 50]

for (i = 0; i < enemiesNum; i++) {
  var obj = new Enemy(pos[i], enemies[i], speeds[i]);
  allEnemies.push(obj);
}

// checkCollisions() function
var checkCollisions = function() {
  for (i in allEnemies) {
    var enemyx = allEnemies[i].x;
    var enemyy = allEnemies[i].y;
    if (player.x > enemyx - 50 && player.x < (enemyx + 70) && player.y > enemyy && player.y <= (enemyy + 70)) {
      player.x = 205;
      player.y = 410;
      allLifes.pop();
    }
  }
}

var count = 0;




//player selection function
var playerSelect = function() {

swal({
     title: "Select the player character",
      buttons: {
        boy: "BOY",
        catgirl: "CAT-GIRL",
        pinkgirl: "Pink-girl",
        horngirl: "Horn-girl",
      }
    })
    .then((value) => {
      switch (value) {

        case "boy":
          player.sprite = 'images/char-boy.png';
          break;
        case "catgirl":
          player.sprite = 'images/char-cat-girl.png';

          break;
        case "pinkgirl":
          player.sprite = 'images/char-pink-girl.png';
        break;
        case "horngirl":
          player.sprite = 'images/char-horn-girl.png';
         break;
        default:
        player.sprite = 'images/char-boy.png';
      }
    });
};

var player = new Player(204, 410);
// This listens for key presses and sends the keys to your
player.handleInput = function(a) {
  if (a == 'left' && this.x > 100) {
    this.x -= 101;
  } else if (a == 'right' && this.x < 385) {
    this.x += 101;
  } else if (a == 'up' && this.y > 0) {
    this.y -= 85;
  } else if (a == 'down' && this.y < 410) {
    this.y += 85;
  }
}
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
