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
  if (katzDeliLine === [] ) return 'There is nobody waiting to be served.'
}
/* base case -if deli line is empty array, return the string
pop the element at index 0 of deli line */
