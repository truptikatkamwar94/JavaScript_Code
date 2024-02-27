let gameNumber = 23;
let userNumber = prompt("Enter any number to check :")
// console.log("Entered number by user :",userNumber)
while(gameNumber != userNumber)
{
    userNumber = prompt("Entered number not matches with gameNumber")
}
console.log("Congratulations!Number matches")
