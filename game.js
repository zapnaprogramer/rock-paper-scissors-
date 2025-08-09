

    
  


function computerChoice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;}
  
var botchoice;
    
   let result = computerChoice(1,3);
    console.log("Random Number: ", result);
    
    if (result == 1){
        botchoice = "Paper";
    }else if (result == 2){
        botchoice = "scissors";
   
    } else {
        botchoice = "rock";
    }
    
    
function humanchoice()   {
    
    
}
    
 console.log(botchoice);
 
 




    



//console.log("Hello world")