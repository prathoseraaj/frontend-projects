let colors = [
    "rgb(215, 215, 46)",
    "rgb(215, 46, 46)",
    "rgb(46, 215, 156)",
    "rgb(187, 46, 215)",
    "rgb(46, 88, 215)"
  ];
  
console.log(colors.length);

function flipper() {
    randomnumber = (Math.floor(Math.random() * colors.length) ) ;
    console.log(randomnumber);

    randomcolor = colors[randomnumber] ;
    console.log(randomcolor);

    changes(randomcolor) ;

    return randomcolor ;
  }

function changes(randomcolor){
    document.body.style.backgroundColor = randomcolor ;
}



