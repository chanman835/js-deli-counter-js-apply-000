function takeANumber(katzDeliLine,person) {
  katzDeliLine.push(person);
  let place = 0;
  return `Welcome, ${person}. You are number ${katzDeliLine.indexOf(person) + 1} in line.`
}
  
/*
push person name into katzDeliLine
return string with person's name and index of person, + 1
*/ 

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) return 'There is nobody waiting to be served!'
  else {
    let person = katzDeliLine[0];
    let serve = [];
    serve.push(person);
    katzDeliLine.shift();
    return `Currently serving ${serve}.`
  }
}

/* base case -if deli line is empty array, return the string
define new array = now serving person
push person at index 0 to new array then shift this person */

function currentLine() {
  if (katzDeliLine)
  
}

/* base case - if line is empty return string
assign variable with string ''

