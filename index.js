// Code your solution in this file!
function distanceFromHqInBlocks(num) {
  let blocks;
  num < 42 ? (blocks = 42 - num) : (blocks = num - 42);
  return blocks;
}


function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(num1, num2) {
  let blocks;
  num1 > num2 ? blocks = num1 - num2 : blocks = num2 - num1;
  return blocks * 264;
}

function calculatesFarePrice(start, destination) {
  let fare;
  const distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return fare = 0;
  } else if (distance < 2000) {
    return fare = (distance - 400) * 0.02;
  } else if (distance < 2500) {
    return fare = 25;
  } else {
    return 'cannot travel that far';
  }
}
