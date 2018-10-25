
$(document).ready(function () {
    // assign power levels and hp to each character
    let playerChosen = false
    let defenderChosen = false
    let recoveryCounter = 0;

    // promt player to chose a character

    $("#instuctions").text("Chose your Assassin");

    $(".card").click(function () {
        // console.log("card clicked")
        if (playerChosen) {

            return false;

        }
        //if charecter is selected copy card to offence div from empty chosen card from "start" div.
        $(this).appendTo("#offence");
        $(this).addClass("text-white bg-warning");

        // Intitialize player stats
        let playerHp = Number($('#offence .Hp').attr("value"));
        let playerPl = Number($("#offence .Pl").attr("value"));
        let playerBPl = Number($("#offence .basePl").attr("value"));

        // console.log("you")
        // console.log("Your Health: " + playerHp)
        // console.log("Power: " + playerPl);
        // console.log("Base Power" + playerBPl);

        playerChosen = true

        //Allow player to chose an apponent
        if (playerChosen = true) {
            $("#instuctions").text("Chose an opponent");
            //console.log("player is chosen")

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

                    // console.log("them")
                    // console.log("Your Health: " + cpuHp)
                    // console.log("Power: " + cpuPl);
                    // console.log("Base Power" + cpuBPl);

                    // console.log(typeof (cpuHp))

                    defenderChosen = true;

                    if (defenderChosen) {
                        $("#instuctions").text("Tap to kill!");
                        //console.log ("defencer chosen") 
                        $("#defence .card").click(function () {
                            // console.log("Kill time");

                            let playerHit = Math.floor(Math.random() * playerPl) + playerBPl;

                            let cpuHit = Math.floor(Math.random() * cpuPl) + cpuBPl;

                            // console.log("CPU health: " + cpuHp)
                            // console.log("Your Health: " + playerHp)

                            // console.log("You attack for " + playerHit + " damage")
                            // console.log("CPU attacks for " + cpuHit + " damage")

                            $('#offence .Hp').text(playerHp)
                            $("#offence .Pl").text(playerPl)
                            $("#offence .basePl").text(playerBPl)

                            $('#defence .Hp').text(cpuHp)
                            $("#defence .Pl").text(cpuPl)
                            $("#defence .basePl").text(cpuBPl)


                            playerHp = playerHp - cpuHit;
                            cpuHp = cpuHp - playerHit;
                            playerBPl++;
                            recoveryCounter++;

                            let recoveryRandom = Math.floor(Math.random() * 10) + cpuHit;
                            let recovery = recoveryRandom * recoveryCounter
                            //console.log(recovery)
                            // console.log("-----------------------")

                            if (cpuHp < 0 && playerHp > 0 ) {
                                $("#defence").empty();
                                console.log(playerHp);
                                    if (recovery > 161) {
                                        playerHp = 160
                                    } else {
                                playerHp = recovery; 
                                    }
                                 console.log(playerHp);
                                $('#offence .Hp').text(playerHp);
                                defenderChosen = false;

                            } else if (playerHp < 0) {
                                $("#offence").empty();
                                $("#instuctions").text("You were killed. Tap here to reset");
                                $("#instuctions").click(function () {
                                    location.reload()
                                });
                            }


                        });

                    }



                    //   playerHp =- Math.floor(Math.random() * cpuPl) + cpuBPl;
                    //   console.log(playerHp)
                    //   $( ".hp #offence").text(playerHp)

                    //   if (playerHp === 0){
                    //   $( "#offence" ).empty();
                    //   playerChosen = false
                    //   }


                }
            });
        };

        /*
                    //if there is not already a charcter in the defender div promt user to chose a character to fight against
        
                    
                        
                        
                        
                        
                        
        
                        // on the attack button have the defenders hp go down by some function of the players power level.
                        // if the defender is defeated empty the deffence div. Do not relace the card.
                        // if there are no more characters to fight inform the player to reset the game.
                        // if there are characters to fight...
                        // increase the players power level
                        // reset some or all of the players hp (Optional).
                        // Prompt the player to chose another fighter to attack.
        
                        //on that same click, (but only after the other function is completed) have the players hp go down by some function of the defenders power level.
                        // if the player is defeated inform the player to reset the same
                    }
                    }
        */
    });
});