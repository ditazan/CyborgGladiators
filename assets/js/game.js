var playerName = window.prompt("What is your cyborg's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "grimes";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(playerName, playerAttack, playerHealth);

function fight() {
  window.alert("the fight has begun");
}

// beg of fight
var fight = function () {
  window.alert("Welcome to Cyborg Gladiators!");
  enemyHealth = enemyHealth - playerAttack;

  console.log(
    playerName +
      " attacked " +
      enemyName +
      ". " +
      enemyName +
      " now has " +
      enemyHealth +
      " health remaining."
  );
};

fight();

//check if player is alive
if (playerHealth > 0) {
  console.log("Your player is still alive!");
} else {
  console.log("This will run instead.");
}



//check enemy health
if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");
} else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

// enemy attack
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
} 
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}