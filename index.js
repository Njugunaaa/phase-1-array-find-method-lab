// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
] 
function isWin(game){
  return game.result === "W";
}
function superbowlWin(record){
  const win=record.find(isWin);
  return win ? win.year : undefined;
}
