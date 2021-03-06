function bubbleSort(arr) {
    indexOfLastUnsort = arr.length;
    do {
        swapped = false;
        for (i = 0; i < indexOfLastUnsort; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        indexOfLastUnsort--;
    } while (swapped)
    return arr;
}

let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log("Unsorted: ", arr);
console.log("Sorted: ", bubbleSort(arr));
