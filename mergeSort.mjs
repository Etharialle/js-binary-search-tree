export function mergeSort(testArray) {
    if (testArray.length === 1) {
        return testArray;
    }
    let left = testArray.slice(0, testArray.length/2);
    let right = testArray.slice(testArray.length/2);

    if (left.length > 1) {
        left = mergeSort(left);
    }
    if (right.length > 1) {
        right = mergeSort(right);
    }
    let sortedArray = merge(left,right);
    return sortedArray;
}

export function merge(left, right) {
    let sorted = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            sorted.push(left[0]);
            left = left.slice(1);
        } else {
            sorted.push(right[0]);
            right = right.slice(1);
        }
    }
    if (left.length > 0) {
        while (left.length > 0) {
            sorted.push(left[0]);
            left = left.slice(1);
        }
    } else {
        while (right.length > 0) {
            sorted.push(right[0]);
            right = right.slice(1);
    }
    }
    return sorted;
}