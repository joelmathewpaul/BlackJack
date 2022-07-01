
const cards=["A","K","Q","J",10,9,8,7,6,5,4,3,2];
const cardFamily=["D","H","S","C"];
let chance=0;
let card;
let family;
let a;
let result;
let player1Score=0;
let player2Score=0;
let scoreIncrement;
let player1Point=document.getElementById("player1-point");
let player2Point=document.getElementById("player2-point");
let winnerArea=document.getElementById("win");
function getCard(a){
    return (cards[Math.floor(a*13)]);
}

function getFamily(a){
    return(cardFamily[Math.floor(a*4)])
}

function declareWinner(){
    let winner;
    console.log(player1Point);
    console.log(player2Point);
    if(player1Score>player2Score){
        winnerArea.innerText="PLAYER 1"
        
    }
    else if(player1Score<player2Score){
        winnerArea.innerText="PLAYER 2"
    } 
    else{
        winnerArea.innerText="TIE"
    }

    

}
function drawCard(){
    chance++;
    a = Math.random();
    card = getCard(a);
    let weight = card;
    a=Math.random();
    family=getFamily(a);
    switch(card){
        case "K": 
            card="King";
            weight = 13;
            break;
        case "Q":
            card = "Queen";
            weight=12;
            break;
        case "J":
            card="Jack";
            weight=11;
            break;
        case "A":
            card="Ace";
            weight=14;
            break;
        default:
            break;
    }
    switch(family){
        case "H":
            family="Hearts";
            break;
        case "D":
            family="Diamond";
            break;
        case "C":
            family="Clubs";
            break;
        case "S":
            family="Spade";
            break;
        default:
            break;
        }
        result=new Array();
        result[0]=card+" Of "+family;
        result[1]=weight;
        return (result);
}
function player1DrawCard(){
    
    let a = Math.random()
   
    if(chance < 6){
        if(chance%2!=0){
            window.alert("**************************Not your chance************************")
        }
        else{
            increment('p1')
            result = drawCard();
            document.getElementById("drawn").innerText=result[0];
            if(result[1]>=5){
                player1Score+=result[1];
                player1Point.innerHTML=player1Score;
            
            }
        }
    }else{
        declareWinner();
        window.alert("***********************GAME OVER****************************")
    }
     
     
    

}

function player2DrawCard(){
    let a =Math.random();
    // if(chance == 6){
    //     declareWinner();
    //     window.alert("***********************GAME OVER****************************")
    // }
    if(chance < 6 ){
        if(chance%2==0){
            window.alert("**************************Not your chance************************")
        } else{
            increment('p2')
            result = drawCard();
            document.getElementById("drawn").innerText=result[0]; 
            if(result[1]>=5){
                player2Score+=result[1];
                player2Point.innerHTML=player2Score;
            
            }
       
        }
    } else{
        declareWinner();
        window.alert("***********************GAME OVER****************************")
    }
    if(chance == 6) {
        declareWinner();

    }
   
     
   
    

}

function increment(player){
    if(player == "p1"){
        document.getElementById("player1-chance").innerText++;
    }
    else{
        document.getElementById("player2-chance").innerText++;
    }
}

function restart(){
    document.getElementById("player1-chance").innerText=0;
    document.getElementById("player2-chance").innerText=0;
    document.getElementById("player1-point").innerText=0;
    document.getElementById("player2-point").innerText=0;
    document.getElementById("drawn").innerText=""
    chance=0;
    document.getElementById("win").innerText="NIL"
    player1Score=0;
    player2Score=0;
}