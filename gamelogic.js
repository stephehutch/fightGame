
$(document).ready(function () {
    // assign power levels and hp to each character
    let playerChosen = false
    let defenderChosen = false
    let recoveryCounter = 0;

    // promt player to chose a character

    $("#instuctions").text("Chose your Assassin");

    $(".card").click(function () {
        //if there is not already a charcter in the offence div promt user to chose thier character
     
        if (playerChosen) {

            return false;

        }
        //if charecter is selected move the card to "#offence" div from "#start" div.
        $(this).appendTo("#offence");
        $(this).addClass("text-white bg-warning");

        // Intitialize player stats
        let playerHp = Number($('#offence .Hp').attr("value"));
        let playerPl = Number($("#offence .Pl").attr("value"));
        let playerBPl = Number($("#offence .basePl").attr("value"));

        playerChosen = true

        //Allow player to chose an apponent
        if (playerChosen = true) {
            $("#instuctions").text("Chose an opponent");

            //mover chosen fighter to defence div
            $("#start .card").click(function () {
                if (defenderChosen) {
                    return false;
                } else {
                    $(this).appendTo("#defence");
                    $(this).addClass("text-white bg-danger");

                    //intialize cup stats 
                    let cpuHp = Number($('#defence .Hp').attr("value"));
                    let cpuPl = Number($("#defence .Pl").attr("value"));
                    let cpuBPl = Number($("#defence .basePl").attr("value"));


                    defenderChosen = true;

                    if (defenderChosen) {
                        $("#instuctions").text("Tap your apponent to attack!");
                        $("#defence .card").click(function () {

                            // on the attack button have the defenders hp go down by a function of the players power level.
                            // and vise versa 

                            let playerHit = Math.floor(Math.random() * playerPl) + playerBPl;
                            let cpuHit = Math.floor(Math.random() * cpuPl) + cpuBPl;


                            $("#playerAttack").text("You attack for " + playerHit + " damage")
                            $("#cpuAttack").text("Your apponent attacks for " + cpuHit + " damage")

                            $('#offence .Hp').text(playerHp)
                            $("#offence .Pl").text(playerPl)
                            $("#offence .basePl").text(playerBPl)

                            $('#defence .Hp').text(cpuHp)
                            $("#defence .Pl").text(cpuPl)
                            $("#defence .basePl").text(cpuBPl)


                            playerHp = playerHp - cpuHit;
                            cpuHp = cpuHp - playerHit;

                              // increase the players base power level
                            playerBPl++;
                            recoveryCounter++;

                            let recoveryRandom = Math.floor(Math.random() * 10) + cpuHit;
                            let recovery = recoveryRandom * recoveryCounter
                            //console.log(recovery)
                            // console.log("-----------------------")

                            if (cpuHp < 0 && playerHp > 0 ) {
                                 // if the defender is defeated empty the deffence and attack divs.
                                $("#defence").empty();
                                $("#playerAttack").empty();
                                $("#cpuAttack").empty();

                                $("#instuctions").text("You Win!");

                                 // reset some or all of the players hp.
                                console.log(playerHp);
                                    if (recovery > 161) {
                                        playerHp = 160
                                    } else {
                                playerHp = recovery; 
                                    }

                                 console.log(playerHp);
                                $('#offence .Hp').text(playerHp);
                                // player can now chose a new defender
                                defenderChosen = false;

                            } else if (playerHp < 0) {
                                $("#offence").empty();
                                // if the player is defeated inform the player to reset the game
                                $("#instuctions").text("You were killed. Tap here to reset");
                                $("#playerAttack").empty();
                                $("#cpuAttack").empty();
                                $("#instuctions").click(function () {
                                    location.reload()
                                });
                            }


                        });

                    }

                }
            });
        };

                    

                        
                       
                        // if there are no more characters to fight inform the player to reset the game.
                        // if there are characters to fight...
                      
                       
                        // Prompt the player to chose another fighter to attack.
        
                        //on that same click, (but only after the other function is completed) have the players hp go down by some function of the defenders power level.
                        
          
    });
});