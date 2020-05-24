function takeANumber(katzDeliLine,person) {
  katzDeliLine.push(person);
  var place = 0;
  console.log(katzDeliLine);
  
  return `Welcome, ${person}. You are number ${katzDeliLine.indexOf(person) + 1} in line.`
}
  


/* iterate through each person 
push person name into katzDeliLine
assign place in line of person, originally 0
return string with person's name and incremented place in line 
*/ 


