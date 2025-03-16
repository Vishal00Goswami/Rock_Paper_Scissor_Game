let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice");

const computerGeneratorChoice = ()=>{
    const option = ["rock","paper","scissor"]
    let num = Math.floor(Math.random()*3)
    return option[num]
}

const Winner = (bool,userChoice, compChoice) =>{
    if(bool){
       document.querySelector("#msg").innerText=`You win! Your ${userChoice} beats ${compChoice}`;
       document.querySelector("#msg").style.background="green";
       userScore++
       document.querySelector("#user-score").innerText = userScore;
    }else{
        document.querySelector("#msg").innerText=`You lose! ${compChoice} beats Your ${userChoice}`;
        document.querySelector("#msg").style.background="red";
        compScore++
        document.querySelector("#comp-score").innerText = compScore;
    }
}

const PlayGame = (userChoice)=>{
    //computer generated choice
    const compChoice = computerGeneratorChoice()

    if(userChoice === compChoice){
        document.querySelector("#msg").innerText="Draw! Play Again";
        document.querySelector("#msg").style.background="#081b31"
    }else{
        let userWin = true 
        if(userChoice == "rock"){
            //scissor, paper
            userWin = compChoice == "paper"?false:true;
        }else if(userChoice == "scissor"){
            //rock, paper
             userWin = compChoice == "rock"? false: true;
        }else{
            //scissor, rock 
            userWin = compChoice == "scissor"?false: true;
        }
        Winner(userWin, userChoice, compChoice);
    }
    
}


choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        PlayGame(userChoice)
    })
})