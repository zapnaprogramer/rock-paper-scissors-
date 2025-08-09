

    
  


function randChoice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;}
  
function Thebotchoice(){
   var botchoice ;
   let result = randChoice(1,3);
 //   console.log("Random Number: ", result);
    
    if (result == 1){
        botchoice = "Paper";
    }else if (result == 2){
        botchoice = "scissors";
   
    } else {
        botchoice = "rock";
        
    }
    
    return botchoice;
    
    }
function humanchoice()   {
let userChoice = prompt("Choose either Rock, Paper, Scissors: ");
return userChoice;
    
    
}    
  
 
function game() {
if (Thebotchoice() == "rock" && humanchoice() == "paper"){
    return("Computer Won");
}
    
}


 console.log(Thebotchoice());
 
 console.log(humanchoice())
 console.log(game())
 


    



//console.log("Hello world")
