/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(typeof s !== "string") return;
  var maxLenth = 0;
  var i = 0;
  var j = 0;
  var len = s.length;
  if(len <= 1)  return len;
  var set = new Set();
  while(i < len && j < len){
      if(!set.has(s.charAt(j))){
          set.add(s.charAt(j++));
          maxLenth = Math.max(maxLenth,set.size);
      }else{
          set.delete(s.charAt(i++));
      }      
  }
  return maxLenth;
};