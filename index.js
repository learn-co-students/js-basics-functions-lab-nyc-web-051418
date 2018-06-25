// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42)
};

function distanceFromHqInFeet(block) {
   return distanceFromHqInBlocks(block) * 264;
};

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
};

function calculatesFarePrice(start, end) {
  let d = distanceTravelledInFeet(start, end);
    if (d < 400) {
      return 0;
    } else if (d > 400 && d < 2000) {
      return (d - 400) * 0.02;
    }  else if (d > 2000 && d < 2500) {
      return 25;
    }  else if (d > 2500) {
      return 'cannot travel that far';
  };
};
