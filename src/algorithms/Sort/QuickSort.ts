/**
 * this functions perform the partition required by quicksort  
 * @param arr number array that is to be sorted
 * @param start start index
 * @param end end index
 * @returns pivot index
 */
const partition = (arr: number[], start: number, end: number) => {
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
    }
  }

  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
  return pivotIndex;
}


/**
 * QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. 
 * 
 * Impleamentation of Quick Sort for number Array
 * Time Complexity: Best -> O(nlog(n)); Average -> O(nlog(n)); Worst -> O(n^2)
 * 
 * @param arr array that is to be sorted
 * @returns sorted array
 */
export const QuickSort = (arr: number[]) => {
  // Base case or terminating case
  let stack: number[] = [];

  // Adding the entire initial array as an "unsorted subarray"
  stack.push(0);
  stack.push(arr.length - 1);

  // The loop repeats as long as we have unsorted subarrays
  while (stack[stack.length - 1] >= 0) {

    // Extracting the top unsorted subarray
    let end = stack.pop();
    let start = stack.pop();

    let pivotIndex = partition(arr, start!, end!);

    // If there are unsorted elements to the "left" of the pivot,
    // we add that subarray to the stack so we can sort it later
    if (pivotIndex - 1 > start!) {
      stack.push(start!);
      stack.push(pivotIndex - 1);
    }

    // If there are unsorted elements to the "right" of the pivot,
    // we add that subarray to the stack so we can sort it later
    if (pivotIndex + 1 < end!) {
      stack.push(pivotIndex + 1);
      stack.push(end!);
    }
  }
  // returns the sorted array
  return arr;
}