// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  return Math.abs(42 - street)
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(startingStreet, endingStreet) {
  return Math.abs((endingStreet - startingStreet) * 264)
}

function calculatesFarePrice(startingStreet, endingStreet) {
  distanceTravelled = distanceTravelledInFeet(startingStreet, endingStreet);
  if (distanceTravelled <= 400) {
    return 0;
  } else if (distanceTravelled > 400 && distanceTravelled <= 2000 ) {
    return .02 * (distanceTravelled - 400 )
  } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
