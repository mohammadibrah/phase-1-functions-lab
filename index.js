// Code your solution in this file!
function distanceFromHqInBlocks (blockNum){
    if (blockNum >= 42){
        return blockNum - 42;
    }else{
        return 42 - blockNum;
    }
    
}
function distanceFromHqInFeet(someValue) {
    const destanceInFeet = distanceFromHqInBlocks(someValue) * 264;
    return destanceInFeet;
  }

function distanceTravelledInFeet(start, destination) {
//returns the number of feet traveled
    let destanceInFeet = 0;
    if (start >= destination){
        destanceInFeet = (start - destination) * 264
    } else {
        destanceInFeet = (destination - start) * 264
    }
    return destanceInFeet;
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const destance = distanceTravelledInFeet(start, destination);
    console.log(destance)
    if (destance <= 400){
        return 0;
        } else if (destance > 400 && destance <= 2000){
            return 0.02 * (destance - 400);
            } else if (destance > 2000 && destance <= 2500){
                return 25;
                } else {
                    return 'cannot travel that far';
                }

}
// console.log(distanceTravelledInFeet(34, 24))
console.log(calculatesFarePrice(34,33))