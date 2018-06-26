// Code your solution in this file!
function distanceFromHqInBlocks(randVal){
  if (randVal < 42) {
    return (42 - randVal);
  } else {
    return (randVal - 42);
  }
}

function distanceFromHqInFeet(randVal){
  return (distanceFromHqInBlocks(randVal) * 264);
}

function distanceTravelledInFeet(aVal,bVal){
  if (aVal < bVal){
    return ((bVal - aVal) * 264);
  } else {
    return ((aVal - bVal) * 264);
  }
}

function calculatesFarePrice(start, end){

const foot = distanceTravelledInFeet(start,end)
  if (foot <= 400) {
    return 0;
  } else if (foot > 400 && foot <= 2000) {
     return ((foot-400) * .02);
  } else if (foot > 2000 && foot < 2500) {
    return 25;
    } else {
    return 'cannot travel that far';
  }
}
