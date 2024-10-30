// Section: Algorithms
// Language: JavaScript
// Name: Merge Sort

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    console.log('Left: ', left);
    console.log("Right: ", right);
    return merge(mergeSort(left), mergeSort(right));
  }
  
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    let mergeResult = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    console.log("Merge Result: ", mergeResult)
    return mergeResult;
  }

  const example = [3,5,1,6,192,54,213,5];
  const example2 = [3,2,6,18,9,7]
  console.log("Initial Array", example2);
  console.log("Result", mergeSort(example2))