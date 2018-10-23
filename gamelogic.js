
$(document).ready(function () {
    // assign power levels and hp to each character
    let playerChosen = false
    let defenderChosen = false

    //let playerHp = the Hp class in the offence tag to number
    //let playerPl = the Pl class in the offence tag to number

    //let cpuHp = the Hp class in the defence tag to number
    //let cpuPl = the Pl class in the defence tag to number

    // if (defenderChosen = false) {

    //     $("#kill").click(function () {
    //         console.log("no kill yet")
    //     });
    // }
 

    // promt player to chose a character

    //if charecter is selected copy card to offence div from empty chosen card from "start" div.
    $("#instuctions").text("Chose your Assassin");

    $(".card").click(function () {
       // console.log("card clicked")
        if (playerChosen) {

            return false;

        } 

        $(this).appendTo("#offence");
        $(this).addClass("text-white bg-warning");
        playerChosen = true

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
    
             defenderChosen = true;  

                  if (defenderChosen){
                    $("#instuctions").text("tap to kill");
                    console.log ("defencer chosen") 
                    $("#defence .card").click(function () {
                        console.log("Kill time");

                      });

                  }



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