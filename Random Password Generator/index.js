let password = {
    lowercha : "abcdefghijklmnopqrstuvwxyz" ,
    uppercha : "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ,
    numbercha : "12345467890" ,
    symbolcha : "!@#$%^&*" ,
    allowedchar : "" ,
    passw : "" ,
    includelowercase : true ,
    includeuppercase : true ,
    includenumbers : true ,
    includesymbols : true ,
    generatepassword : function(length = 12) {
        this.allowedchar += this.includelowercase ? this.lowercha : "";
        this.allowedchar += this.includeuppercase ? this.uppercha : "";
        this.allowedchar += this.includenumbers ? this.numbercha : "";
        this.allowedchar += this.includesymbols ? this.symbolcha : "";

        for(let i=0 ; i<length ; i++){
            let randomindex = Math.floor(Math.random()*(this.allowedchar.length)) ;
            this.passw += this.allowedchar[randomindex];  
        }

        return this.passw ;
    }



}

console.log(`Generated Password : ${password.generatepassword()}`);
