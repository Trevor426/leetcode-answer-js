/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  if(typeof(J)!=="string"||typeof(S)!=="string") return false;
  const jLength = J.length;
  const sLength = S.length;
  if(jLength>50||sLength>50) return false;
  if(jLength<1) return false;
  let jMap = new Map();
  for(let i=0;i<jLength;i++){
      jMap.set(J[i],0);
  }
  let sum = 0;
  for(let j=0;j<sLength;j++){
      if(jMap.has(S[j])){
          sum++;
      } 
  }
  return sum;
};