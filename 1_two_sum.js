/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var complement;
  var result = [];
  var map = new Map();
  for(var i=0;i<nums.length;i++){
      complement = target - nums[i];
      if(map.has(complement)){
        result.push(map.get(complement),i);
        return result;
      }
      map.set(nums[i],i);
  }
};