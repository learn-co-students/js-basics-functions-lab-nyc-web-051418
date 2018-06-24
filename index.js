// Code your solution in this file!
distanceFromHqInBlocks = (num) => {
  return Math.abs(num - 42);
}

distanceFromHqInFeet = (num) => {
  return distanceFromHqInBlocks(num)*264;
}

distanceTravelledInFeet = (num1,num2) => {
  return distanceFromHqInFeet(num2) - distanceFromHqInFeet(num1);
}

calculatesFarePrice = (num1,num2) => {
  let distance = distanceTravelledInFeet(num1,num2)
  if (distance < 400) {
    return 0; 
  } 
  else if (distance >= 400 && distance <= 2000) {
    return 0.02*(distance-400);
  }
  else if (distance > 2000 && distance < 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}