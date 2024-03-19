let speed = 75;
checkSpeed(speed);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) return console.log("Ok");
  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  // suspened if the driver has more than 180km/h
  if (points >= 12) return console.log("License suspended");

  console.log("Points", points); // display points to screen
}
