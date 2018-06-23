// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  const hqBlock = 42;
  let dist;

  if (blockNumber >= hqBlock) {
    return blockNumber - hqBlock;
  }
  else {
    return hqBlock - blockNumber;
  }
};

function distanceFromHqInFeet(blockNumber) {
  return  distanceFromHqInBlocks(blockNumber) * 264
};

function distanceTravelledInFeet(from, to) {

    let dist = (from - to) * 264
    if (dist < 0) {
      return dist * -1;
    }
    else {
      return dist;
    }
};

function calculatesFarePrice(start, destination) {
  let dist = distanceTravelledInFeet(start, destination)

  if (dist <= 400) {
    return 0;
  }
  else if (dist > 400 && dist <= 2000) {
    return (dist-400)*0.02;
  }
  else if (dist > 2000 && dist < 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
};
