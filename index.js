function distanceFromHqInBlocks (location) {
  return location > 42 ? location - 42 : 42 - location;
}

function distanceFromHqInFeet (location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet (startBlock, endBlock) {
  blocks = startBlock > endBlock ? startBlock - endBlock : endBlock - startBlock;
  return blocks * 264;
}

function calculatesFarePrice (start, destination) {

  feetTravelled = distanceTravelledInFeet(start, destination);

  if (feetTravelled <= 400)
    return 0;
  else if (feetTravelled > 2500)
    return 'cannot travel that far';
  else {
    if (feetTravelled > 2000)
      return 25;
    else
      return (feetTravelled -= 400) * .02;
  }
}
