class coordinate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.point = [this.x, this.y];
    this.previous = null;
  }
}

function validInput(arr) {
  if (
    arr.length !== 2 ||
    arr[0] < 0 ||
    arr[0] > 7 ||
    arr[1] < 0 ||
    arr[1] > 7 ||
    !arr.every(Number.isInteger)
  ) {
    return false;
  }
  return true;
}

function possibleMove(point) {
  let move = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [-2, 1],
    [1, -2],
    [2, -1],
    [-1, -2],
    [-2, -1],
  ];
  let result = [];
  for (let i = 0; i < move.length; i++) {
    let newLocation = new coordinate(
      point.x + move[i][0],
      point.y + move[i][1]
    );
    if (validInput(newLocation.point)) {
      newLocation.previous = point;
      result.push(newLocation);
    }
  }
  return result;
}

function levelOrder(start, end) {
  const visited = [];
  const queue = [start];

  while (queue.length > 0) {
    const current = queue.shift();
    visited.push(current);
    const moves = possibleMove(current);
    for (let i = 0; i < moves.length; i++) {
      let isVisited = false;
      for (let j = 0; j < visited.length; j++) {
        if (moves[i].x === visited[j].x && moves[i].y === visited[j].y) {
          isVisited = true;
          break;
        }
      }

      if (!isVisited) {
        queue.push(moves[i]);
      }
    }
    if (current.x == end.x && current.y == end.y) {
      return current;
    }
  }
}

function knightMoves(arr1, arr2) {
  if (!validInput(arr1) || !validInput(arr2)) {
    log("Invalid input");
    return null;
  }
  let start = new coordinate(arr1[0], arr1[1]);
  let end = new coordinate(arr2[0], arr2[1]);
  let findPath = levelOrder(start, end);
  let jumps = 0;
  let result = [];
  let temporaryNode = findPath;
  while (temporaryNode.previous) {
    jumps++;
    result.push(temporaryNode.point);
    temporaryNode = temporaryNode.previous;
  }
  result.push(start.point);
  let jumpFromStart = result.reverse();
  jumpFromStart.push(`${jumps} moves`);
  log(jumpFromStart);
}

function log(x) {
  console.log(x);
}

//////TESTING//////

// let start = new coordinate(0, 0);
// let end = new coordinate(7, 7);
// log(levelOrder(start, end));

knightMoves([0, 0], [7, 7]);
