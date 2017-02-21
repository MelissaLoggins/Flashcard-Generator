var fs = require("fs");
var inquirer = require("inquirer");

// BASIC CARD CONSTRUCTOR
function BasicCard(front, back){
    if(this instanceof BasicCard){
        this.front = front;
        this.back = back;
    } else {
        return new BasicCard(front, back);
    }
    
}
// ADDING PRINT CARD TO BASICCARD PROTOTYPE
BasicCard.prototype.printCard = function(){
    console.log("Question: " + this.front + "\nAnswer: " + this.back);
}

