import inquirer from "inquirer"

const compGuess = Math.floor(Math.random() * 10 + 1)
//console.log(`Computer's Guess: ${compGuess}`)

const data = await inquirer.prompt([
    {
        name: "usersGuess",
        type: "number",
        message: "Guess a number (1-10) : ",
    },
])

//console.log(data.usersGuess)



    if(compGuess === data.usersGuess)
    {
    console.log("You win!")        
    }
    else
    {
        console.log(`Computer's Guess: ${compGuess}`)
        console.log("You've lost!")
    }


