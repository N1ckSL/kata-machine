// array should be sorted
// when you half the array at each step, its either O(log N) or O(Nlog N)
// you dont traverse the array (or subarrays), you just half it, and compare to the searched value
export default function bs_list(haystack: number[], needle: number): boolean {
    // search (arr, low, high)
    // m = Math.Floor(low + (high - low)/2)
    // v = arr[m]
    // 1. if v = needle return true
    // 2. if v > needle { low = m + 1}
    // 3. if v <=> needle { high = m }
    // [low, high)

    let lo = 0;
    let hi = haystack.length;

    do {
        const m = Math.floor(lo + (hi - lo) / 2);

        let v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }
    } while (lo < hi);

    return false;
}
