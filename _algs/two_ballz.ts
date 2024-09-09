export default function two_crystal_balls(breaks: boolean[]): number {
    let jmpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jmpAmount;

    // here we find where the first ball breaks and we jumo sqrt of breaks.length each step
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    // after we found it, we exit the loop, go back one step by subtracting one sqrt of breaks.length
    i -= jmpAmount;

    // we loop again, for the second ball, to find where both of them break
    for (let j = 0; j < jmpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) return i;
    }

    return -1;
}
