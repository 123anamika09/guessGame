const max = prompt("enter the maxm no ");
const Random = Math.floor(Math.random() * max) +1;
let guess = prompt("enter the no");
while(true){
if( guess == "quit") {
    console.log("user quit");
    break;
}if(guess == Random) {
    console.log("you guessed the no !! congratulations!!",Random);
    break;
}
else if(guess>Random){
    guess = prompt("your no is too large");
}else {
    guess = prompt("your no is too small");
}
}