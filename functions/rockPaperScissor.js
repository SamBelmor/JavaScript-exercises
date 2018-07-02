let game = (player) => {
	let decision = prompt("Choose between: rock, paper or scissors");
  let decision2 = prompt("Both chose the same. Choose again");
	let options = ["rock", "paper", "scissors"];
	let randomOptions = options[Math.floor(Math.random() * options.length)];
  
  if (decision === "rock") {
  	if (randomOptions === "rock") {
    	return decision2;
    }
    else if (randomOptions === "paper") {
    	return "Paper covers rock. You lose";
    }
    else if (randomOptions === "scissors") {
    	return "Rock breaks scissors. You win!";
    }
  }
  else if (decision === "paper") {
  	if (randomOptions === "rock") {
    	return "Paper covers rock. You win!";
    }
    else if (randomOptions === "paper") {
			return decision2;
    }
    return "Scissors cuts paper. You lose";    
  }
  else {
  	if (randomOptions === "rock") {
    	return "Rock breaks scissors. You lose";
    }
    else if (randomOptions === "paper") {
    	return "Scissors cuts paper. You win!";
    }
    return decision2;
  }
}

console.log(game());
