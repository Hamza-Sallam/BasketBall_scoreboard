let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeBoardEl=document.getElementById('home-board')
let guestBoardEl=document.getElementById('guest-board')
let homeCount=0
let guestCount=0
let seconds=0
setInterval(() => {
    document.getElementById("timer").textContent = ++seconds+" ";
  }, 1000);
function addHome(num){
    homeCount +=num
    homeScore.innerText = homeCount
    
}


function addGuest(num){
    guestCount +=num
    guestScore.innerText = guestCount
}

function reset(){
    homeScore.innerText =0
    guestScore.innerText=0
    homeCount=0
    guestCount=0
    seconds=0
    guestBoardEl.style.cssText = "outline:none;outline-offset:none"
    homeBoardEl.style.cssText = "outline:none;outline-offset:none"
}

function checkLeader(){
    if(homeCount > guestCount){
        homeBoardEl.style.cssText = "outline:3px solid white; outline-offset:10px"
        guestBoardEl.style.cssText = "outline:none;outline-offset:none"
    }
    else{
        
         guestBoardEl.style.cssText = "outline:3px solid white; outline-offset:10px"
         homeBoardEl.style.cssText = "outline:none;outline-offset:none"
    }
    
    }