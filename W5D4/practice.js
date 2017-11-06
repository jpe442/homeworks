function uniq(array) {
  const uniqqued = [];

  array.forEach(el => {
    if (!uniqqued.includes(el)) {
      uniqqued.push(el);
    }
  });

  return uniqqued;
}

console.log(uniq([1,1,2,3,4]));

function twoSum(array) {
  const pairs = [];
  
}

