var toLowerCase = function(str) {
  return str.split('').map( i => String.fromCharCode(i.charCodeAt()|32) ).join('')
};

//位运算符|的理解