var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================

// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W"
      break;
    case "S":
      rover.direction = "E"
      break;
    case "E":
      rover.direction = "N"
      break;
    case "W":
      rover.direction = "S"
      break;
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E"
      break;
    case "S":
      rover.direction = "W"
      break;
    case "E":
      rover.direction = "S"
      break;
    case "W":
      rover.direction = "N"
      break;
  }
  console.log("turnRight was called!");
}

function moveForward(rover){
    if(rover.direction === "N" && rover.y > 1){
      rover.travelLog.push([rover.x, rover.y]);
      rover.y -= 1;
    }

    else if(rover.direction === "S" && rover.y <= 8){
      rover.travelLog.push([rover.x, rover.y]);
      rover.y += 1;
    }

    else if(rover.direction === "E" && rover.x <= 8){
      rover.travelLog.push([rover.x, rover.y]);
      rover.x += 1;
    }

    else if(rover.direction === "W" && rover.y > 1){
      rover.travelLog.push([rover.x, rover.y]);
      rover.x -= 1;
    }

    else {
      console.log("You can't go that way!")
    }
  console.log("moveForward was called")
  console.log(rover.travelLog)
}

function moveBackward(rover){
  

  if(rover.direction === "N" && rover.y <= 8){
    rover.travelLog.push([rover.x, rover.y]);
    rover.y += 1;
  }

  else if(rover.direction === "S" && rover.y > 1){
    rover.travelLog.push([rover.x, rover.y]);
    rover.y -= 1;
  }

  else if(rover.direction === "E" && rover.y > 1){
    rover.travelLog.push([rover.x, rover.y]);
    rover.x -= 1;
  }

  else if(rover.direction === "W" && rover.x <= 8){
    rover.travelLog.push([rover.x, rover.y]);
    rover.x += 1;
  }

  else {
    console.log("You can't go that way!")
  }
console.log("moveBackward was called")
console.log(rover.travelLog)
}

function command(str){
  var inputs = "fblr"
  var valid = true;
  for (var i=0; i <str.length; i++){
    if (inputs.indexOf(str[i]) === -1) {
      valid = false;
    }
  }
  if(valid){
    for (var i=0; i <str.length; i++){
      if(str[i] === "f"){
        moveForward(rover);
      }

      else if(str[i] === "b"){
        moveBackward(rover);
      }

      else if(str[i] === "r"){
        turnRight(rover);
      }

      else if(str[i] === "l"){
        turnLeft(rover);
      }
    }
  }
    else(console.log("Your command is not valid! You may only use f/b/l/r."))
} 