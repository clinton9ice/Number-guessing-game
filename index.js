/*
This project is for the sole purpose of HNG training task.
*/ 

// This would have been stored in cookies but it ain't supported on replit
let name = prompt("Hi there, What is your name? ");

const guessNumber = (userGuess) => {
  // Make sure it's a number
  userGuess = Number(userGuess);

  // random value generated
  let randNo = Math.floor(Math.random() * 2 + 1);

  if (userGuess === randNo) {
    console.log(
      `CONGRATULATIOS ${name} you guessed right, the answer is ${userGuess}.`
    );
  } else if (userGuess > randNo) {
    console.log("OHH No your guess was greater, try a smaller number");
    // return guessNumber(userGuess)
  } else {
    console.log("OOPS SORRY!! try again but this time a HIGHER Number.");
  }
};

if (name) {
  console.log(`${name} welcome to our number guessing game.`);
  let no = Number(prompt(`Please guess a number`));
  
  if (isNaN(no)) {
      console.log("Sorry only numbers are allowed");
  }else guessNumber(no);
}
