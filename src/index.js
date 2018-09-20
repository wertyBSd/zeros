module.exports = function getZerosCount(number) {
  let count = 0;
  for(let i = 1; i < number + 1; i++){
    if(i%5===0){
      count += getCount(i);
    }
  }
  return count;
};

function getCount(number){
  count = 0;
  if(number%5===0){
    count += 1 + getCount(number/5);
  }
  return count;
}