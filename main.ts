#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const main = async function () {
    while (true) {
        const askUserName = async () => {
            const { username } = await inquirer.prompt({

                name: "username",
                type: "input",
                message: (chalk.italic("Kindly enter your name"))
            })
            console.log(chalk.bold.yellow(`Hello ${username} , Welcome to the Quiz World!`));
        };

        const action = await inquirer.prompt(
            {
                name: "confirm",
                type: "list",
                choices: ["Start the Quiz", "Exit the Quiz"],
                message: (chalk.bold.bgBlueBright("What would you like to do?")),
                default: "true"

            })

        if (action.confirm === "Exit the Quiz") {
            console.log(chalk.bold.greenBright("Thanks to show your interest "));
            process.exit();
        }


        const { confirm } = await inquirer.prompt({
            name: "confirm",
            type: "confirm",
            message: (chalk.bold.greenBright("Hello participant!, would you like to tell us your name ?"))
        }

        )

        if (confirm === false) {
            console.log(chalk.bold.blueBright("Hello participant,Welcome to the Quiz World!"));

        } else {
            await askUserName();
        };


        let quizAnswer = {
            q1: "River Nile",
            q2: "Dentist",
            q3: "Mars",
            q4: "Plasmodium",
            q5: "Hazrat Muhammad(S.A.W)",

        }

        let TotalScore = 10;
        let ObtainedScore = 0;

        const quiz = async (question: string, choices: any, rightAnswer: any) => {
            let { userAnswer } = await inquirer.prompt({
                name: "userAnswer",
                type: "list",
                choices: choices,
                message: question
            })

            if (userAnswer === rightAnswer) {
                console.log(chalk.bold.greenBright("\n\t Correct answer\n\t"))
                ObtainedScore += 2

            } else {
                console.log(chalk.bold.redBright("\n\t Incorrect answer\n\t"));
            }

        };


        await quiz("which is the world's longest river?",
            [quizAnswer.q1, "Indus River", "Ganga River"], quizAnswer.q1)


        await quiz("what was the profession of Fatima Jinnah ?",
            ["Lawyer", quizAnswer.q2, , "Teacher"], quizAnswer.q2)


        await quiz("which planet is known as Red Planet ?",
            ["Mercury", "Earth", quizAnswer.q3], quizAnswer.q3)


        await quiz("Malaria is caused by?",
            ["Mosquitto", quizAnswer.q4, , "Dengue"], quizAnswer.q4)


        await quiz("who is the last prophet of Allah ?",
            ["Hazrat Adam (A.s)", "Hazrat Musa (A.s)", quizAnswer.q5], quizAnswer.q5)


        console.log(chalk.yellow(`Quiz completed! Your final score is: ${ObtainedScore} out of ${TotalScore}`));


        if (ObtainedScore < TotalScore){
            console.log(chalk.bold.bgGrey.redBright("\n\t  Your score is less than 10 , Try to improve again\n\t"));


        } else if (ObtainedScore === TotalScore){
            console.log(chalk.bold.greenBright("\n\t Congratulations! You've got a perfect score!\n\t"));
            
        }


        let retryQuiz = await inquirer.prompt({
            name: "confirm",
            type: "confirm",
            message: "Dear Participant! Do you want to reattempt the Quiz?",
            default: "true"
        });


        if (retryQuiz.confirm === false) {
            console.log(chalk.bold.magentaBright("\n Thanks for Participating\n"));
            console.log(chalk.bold.bgBlack(`\n\t Your Total Score is ${TotalScore}\t\n`));
            console.log(chalk.yellowBright(`\n\t Your Obtained Score is ${ObtainedScore}\t\n`));

            break;
        }

    }

};
main();