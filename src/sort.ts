export function sort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const [pivot, ...rest] = arr;
    const less: number[] = [];
    const greater: number[] = [];

    for (const x of rest) {
        if (x < pivot) less.push(x);
        else greater.push(x);
    }

    return [...sort(less), pivot, ...sort(greater)];
}