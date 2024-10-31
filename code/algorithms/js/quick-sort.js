// Section: Algorithms
// Language: JavaScript
// Name: Quick Sort

function quickSort(arr) {
    if (arr.length < 2) {
      return arr;
    } else {
      const pivot = arr[Math.floor(arr.length / 2)];
      const less = [];
      const equal = [];
      const greater = [];
  
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
          less.push(arr[i]);
        } else if (arr[i] === pivot) {
          equal.push(arr[i]);
        } else {
          greater.push(arr[i]);
        }
      }
  
      return [...quickSort(less), ...equal, ...quickSort(greater)];
    }
  }

  const example = [3,5,1,6,192,54,213,5];
  const example2 = [3,2,6,18,9,7]
  console.log("Initial Array", example2);
  console.log("Result", quickSort(example2))