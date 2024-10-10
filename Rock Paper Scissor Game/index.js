let randomnumber = Math.floor(Math.random() * 3) + 1 ;
console.log(randomnumber);

let yourchoice ;
function game(yourchoice) {

    let player , computer ;
    player = yourchoice.id ;
    console.log(`your choice is ${player}`);
    console.log(randomnumber);
    computer = computerChoice();
    console.log('Computer choice: ', computer);
    results = decidewinner(player,computer);
    console.log(results);


    frontend(player,computer,results);

    return results; 
    
}

function computerChoice(){
    return ( ['rock','paper','scissor'][randomnumber-1]);
}
console.log(computerChoice());

function decidewinner(player, computer) {
    if (player === computer) {
        return 'Game tied!';

    } else if (player === 'rock' && computer === 'paper') {
        return 'Computer wins';

    } 
    
    else if (player === 'rock' && computer === 'scissor') {
        return 'You win!';

    } 
    
    else if (player === 'paper' && computer === 'rock') {
        return 'You win!';

    }
    
    else if (player === 'paper' && computer === 'scissor') {
        return 'Computer wins';
    } 
    
    else if (player === 'scissor' && computer === 'rock') {
        return 'Computer wins';
    }
    
    else if (player === 'scissor' && computer === 'paper') {
        return 'You win!';
   
    }

}

function frontend(player,computer,results) {
    let imagdatabase = {
        'rock' : document.getElementById("rock").src ,
        'paper' : document.getElementById("paper").src , 
        'scissor' : document.getElementById("scissor").src ,
    }

    //Removing the elements :
    
    document.getElementById("rock").remove() ;
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();

    //creating an items for dispaly :
    let playerdiv = document.createElement("div");
    let resultsdiv = document.createElement("div");
    let computerdiv = document.createElement("div");

    //adding context to the newly created div :
    playerdiv.innerHTML = `<img src= ${imagdatabase[player]} alt="you" width="100" height="100">` ;
    resultsdiv.innerHTML = `<h1>${results}</h1>` ;
    computerdiv.innerHTML = `<img src= ${imagdatabase[computer]} alt="computer" width="100" height ="100">` ;

    document.getElementById('imgu').appendChild(playerdiv);
    document.getElementById('imgu').appendChild(resultsdiv);
    document.getElementById('imgu').appendChild(computerdiv);


}
