const temprature = document.getElementById("temprature");
const tofarenhit = document.getElementById("tofarenhit");
const tocelcius = document.getElementById("tocelcius");
const answer = document.getElementById("answer");
let temp ;   

function convert(){
    if(tofarenhit.checked){
        temp = Number(temprature.value);
        temp = (temp * (9/5)) + 32 ;      // °F = (°C × 9/5) + 32
        answer.textContent = temp.toFixed(1) + `°F` ;
    }

    else if(tocelcius.checked){
        temp = Number(temprature.value);
        temp = ( temp - 32 ) * (5/9) ;    // [°C ]= (°F − 32) x 5/9
        answer.textContent = temp.toFixed(1) + `°C ` ;
    }

    else{

        answer.textContent = `Select A Unit ` ;

    }
    

}