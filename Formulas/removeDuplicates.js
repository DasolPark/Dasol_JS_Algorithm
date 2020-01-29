// we can remove duplicated number

function removeDuplicates(arr) {
  const uniqueNumArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueNumArr.indexOf(arr[i]) === -1) {
      uniqueNumArr.push(arr[i]);
    }
  }

  return uniqueNumArr;
}
