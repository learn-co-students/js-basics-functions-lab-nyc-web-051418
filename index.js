// Code your solution in this file!

function distanceFromHqInBlocks(place){
if (place>=42){
  return place-42
}
else{
  return 42-place
}
}

function distanceFromHqInFeet(place){
  return distanceFromHqInBlocks(place)*264
}

function distanceTravelledInFeet(a,b){
if (a<b){
  return (b-a)*264
}else {
  return (a-b)*264
}
}

function calculatesFarePrice(start, destination){
  travelled = distanceTravelledInFeet(start,destination)
  if (travelled<400){
    return 0
  }else if (travelled>=400 && travelled<=2000) {
    return 0.02*(travelled-400)
  }else if (travelled>2000 && travelled <2500) {
    return 25
  }else{
    return "cannot travel that far"
  }
  }
