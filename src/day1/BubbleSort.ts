export default function bubble_sort(arr: number[]): void {
    // go through the whole array
    for (let i = 0; i < arr.length; i++) {
        // dont count the last element, because we have j + 1 and we dont want to get off the array, and also dont count the i element, because the last element is always sorted, after the traversal
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            // tmp = first elem of swap
            // then repet what is in the tmp on the next line and it is equal to your second elem of swap
            // second elem of swap = tmp
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}
