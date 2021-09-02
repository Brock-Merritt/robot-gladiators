var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple values at once like this console.log(playerName,playerAttack,playerHealth);

var enemyNames = ["Roborto","Amy Android", " Rombo Tombo"]
var enemyHealth = 50;
var enemyAttack =12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


// Game States
//|"Win" -player defeats enemy robots
// Fight and defeat all enemies
//"lose" - player health >0




//fight function
var fight = function (enemyName) {

  var promptFight = window.prompt (' Would you like to Fight or Skip this battle? Enter "Fight" or "Skip" to choose');
  if (promptFight === "fight" || promptFight === "Fight"){
        enemyHealth = enemyHealth - playerAttack;
        console.log(
              playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
          );

        if (enemyHealth <= 0) {
            window.alert(enemyName+ " has died! ");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left. ");
        }
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining. "
        );
        if (playerHealth <= 0) {
                window.alert(playerName+ " has died! ");
        } else {
                 window.alert(playerName + " still has " + playerHealth + " health left. ");
        }
    } else if (promptFight=== "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("are you sure you'd like to quit")

        if(confirmSkip) {
            window.alert(playerName + "has decide to skip the fight. Goodbye!");
            playerMoney= playerMoney -2;
        }
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
