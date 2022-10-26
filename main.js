let array = ['rock', 'paper', 'scissor'];
    let player_score=0;
    let computer_score=0;
    const getComputerChoice = () => {
      let random = Math.floor((Math.random() * 3));
      let randomNames = array[random];
      return randomNames;
    }
    
    const game = () => {
     
      for (let i = 0; i < 5; i++) {
        let input = prompt('Choose rock, paper or scissor');
        const playerSelection = input.toLowerCase();
        const computerChoice = getComputerChoice();
        
        const computerWins = `Computer Wins! ${computerChoice} beats ${playerSelection}.`;
        const playerWins = `Player wins! ${playerSelection} beats ${computerChoice}.`;
        const tie = `It's a tie, ${playerSelection} is equal to ${computerChoice}.`;
    
        if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissor') {
          i = i - 1;
          console.log("Nice try! Please enter a valid input.");
        }
        if (playerSelection === 'rock' && computerChoice === 'paper' || playerSelection === 'paper' && computerChoice === 'scissor' || playerSelection === 'scissor' && computerChoice === 'rock') {
                computer_score+=1;
            console.log(computerWins);
        } 
        if (playerSelection === 'paper' && computerChoice === 'rock' || playerSelection === 'scissor' && computerChoice === 'paper' || playerSelection === 'rock' && computerChoice === 'scissor') {
            player_score+=1;
            console.log(playerWins);
        } else {
            if (playerSelection === computerChoice) {
              console.log(tie);
              }
          }
      }
      console.log("Computer:"+computer_score+' vs '+'Player:'+player_score);
    }
    
    game();