function distanceFromHqInBlocks(myBlock){
 if (myBlock > 42){
   var block = myBlock - 42;
 }
else if (myBlock< 42) {
  block = 42 - myBlock;
  
}
 return block;
 
 }
 
function distanceFromHqInFeet (block1,block2) {
   if (block1 > block2){
   var feet = (myFeet - 42) * 264;
  // var X = feet * 264;
 }
else if (myFeet< 42) {
  feet = (42 - myFeet) * 264;
  
}
return feet;
}

function distanceTravelledInFeet (myFeets) {
   if (myFeets > 42){
   var feets = (myFeets - 42) * 264;
 }
else if (myFeets< 42) {
  feets = (42 - myFeets) * 264;
  
}
return feets;
}


