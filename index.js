// Code your solution in this file!
function distanceFromHqInBlocks(streetNum) {
  return Math.abs(streetNum - 42);
}

function distanceFromHqInFeet(streetNum) {
  return distanceFromHqInBlocks(streetNum)*264;
}

function distanceTravelledInFeet(streetNum, secondStreetNum) {
  return Math.abs(streetNum - secondStreetNum)*264;
}

function calculatesFarePrice(streetNum, secondStreetNum) {
  let distance = distanceTravelledInFeet(streetNum, secondStreetNum)
  if (distance > 2500) {
    return 'cannot travel that far';
  }
  else if (distance < 2500 && distance > 2000) {
    return 25;
  }
  else if (distance < 2000 && distance > 400) {
    return ((distance - 400)*(0.02))
  }
  else {
    return 0;
  }
}
