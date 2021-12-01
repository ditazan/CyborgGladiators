// player stats
var playerName = window.prompt("What is your cyborg's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//enemy stats
var enemyName = "grimes";
var enemyHealth = 50;
var enemyAttack = 12;

var promptFight = window.prompt(
  "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
);

console.log(
  playerName,
  playerAttack + " attack, ",
  playerHealth + " health, " + "$" + playerMoney
);

function fight() {
  window.alert("the fight has begun");
}

// fight function
var fight = function () {
  window.alert("Welcome to Cyborg Gladiators!");
  //   enemyHealth = enemyHealth - playerAttack;

  //   console.log(
  //     playerName +
  //       " attacked " +
  //       enemyName +
  //       ". " +
  //       enemyName +
  //       " now has " +
  //       enemyHealth +
  //       " health remaining."
  //   );
};

// start fight or skip fight
if (promptFight === "fight" || promptFight === "FIGHT") {
  fight();
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName +
      " attacked " +
      enemyName +
      ". " +
      enemyName +
      " now has " +
      enemyHealth +
      " health."
  );

  //check enemy health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName +
      " attacked " +
      playerName +
      ". " +
      playerName +
      " now has " +
      playerHealth +
      " health remaining."
  );
  //check if player is alive
  if (playerHealth > 0) {
    console.log("Your player is still alive!");
  } else {
    console.log("This will run instead.");
  }
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm 
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. weenie !");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
  } else {
  window.alert("not a valid option. try again!");
}

// enemy attack
// console.log(
//   enemyName +
//     " attacked " +
//     playerName +
//     ". " +
//     playerName +
//     " now has " +
//     playerHealth +
//     " health remaining."
// );

// // check player's health
// if (playerHealth <= 0) {
//   window.alert(playerName + " has died!");
// } else {
//   window.alert(playerName + " still has " + playerHealth + " health left.");
// }
