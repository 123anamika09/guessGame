let gameSeq = [];
let userSeq = [];
let gameStarted = false;
let level = 0;
let btns = ["yellow","pink","red","blue"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress" , function(){
    if(gameStarted==false){
        console.log("game is Started");
        gameStarted = true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");// flash class is used for background color white by js
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}
function userFlash(btn){
    btn.classList.add("userFlash");// flash class is used for background color green by user
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },1000);
}
function levelUp(){
    level++;
    h2.innerText = `level ${level}`;
    let randomIdx = Math.floor(Math.random() *3); // choose random index for color 
    let radColor = btns[randomIdx] ; // choose random color
    // accesss the random btn for radColor
    let randbtn = document.querySelector(` .${radColor} `);
    console.log(randomIdx)
    console.log(radColor)
    console.log(randbtn)
    gameFlash(randbtn);
    
}
function btnPress(){
    console.log(this);
    let btn = this ;
    // gameFlash(btn); // btnFalsh wala btn take
    userFlash(btn);
} 
let allBtns = document.querySelectorAll(".btn");
for(btn  of allBtns){
    btn.addEventListener("click", btnPress);
}