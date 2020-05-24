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

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) return 'The line is currently empty.'
    let lineString = 'The line is currently: ';
    lineString =+ `1. ${katzDeliLine[0]`;
    for (let i = 1; i < katzDeliLine.length; i++) {
      let person = katzDeliLine[i];
      lineString += `,${i + 1}. ${person}`;
    }
  
  return lineString
  
}

/* base case - if line is empty return string
assign variable with string 'The line is currently'
iterate through the line, and concat (index + 1) and name of current person
return string variable */

