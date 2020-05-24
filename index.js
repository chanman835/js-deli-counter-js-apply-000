function takeANumber(katzDeliLine,person) {
  var place = 0;
  for (let i = 0; i < person.length; i++) {
    katzDeliLine.push(person[i]);
    place++
  }
  
  return `Welcome, ${person}. You are number ${place} in line.`
}
  


/* iterate through each person 
push person name into katzDeliLine
assign place in line of person, originally 0
return string with person's name and incremented place in line 
*/ 


