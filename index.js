var readLineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;
const datesInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];

function dateCheck(days,month){
  if(days!=0 && month!=0 && days<=datesInMonth[month-1]){
    
    return true;
  }else{
    
    return false;
  }
}

function test_prime(n){
  if (n===1) {
    return false;
  }else if(n === 2){
    return true;
  }else{
    for(var x = 2; x < n; x++){
      if(n % x === 0){
        return false;
      }
    }
    return true;  
  }
}

log("This CLI app will take your birthdate in the form dd-mm and it will tell you whether your birthdate is prime or not.")
log("________________")
var userName = readLineSync.question("But first, Whats your name: ");
var ddmm = readLineSync.question("Hello "+userName+" now please enter your birthdate in the fomrate "+chalk.black.bgRed ("dd-mm")+" only:\n");
log("_________________")
if(!isNaN(ddmm.split("-").join(""))){
  var ddmmstring = ddmm.split("-").join("");
  var dd = ddmmstring.substr(0,2);
  var mm = ddmmstring.substr(2,3);
  
  if(dateCheck(dd,mm)){
    if(test_prime(ddmmstring)){
    log(chalk.black.bgGreen("your birthdate "+ddmm+" in the given fomat is prime number."))
  }else{
    log(chalk.yellow.bgBlue("your birthdate "+ddmm+" in the given fomat is not a prime number."))
  }
  }else{
    log(chalk.black.bgRed(ddmm+" is not a possible combination. Please check your response"))
  }
  
  
}else{
  log(chalk.black.bgRed("Enter the valid date in the formate dd-mm"))
}