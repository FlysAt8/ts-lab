export function isBalanced(input: string): boolean {
    const stack: string[] = [];

    const pairs: Record<string, string> = {
        "(": ")",
        "[": "]",
        "{": "}",
        "<": ">",
    };

    const closers = new Set(Object.values(pairs));

    for (const ch of input) {
        if (ch in pairs) {
            stack.push(ch);
        } else if (closers.has(ch)) {
            const last = stack.pop();
            if (last === undefined || pairs[last] !== ch) {
                return false;
            }
        }
    }

    return stack.length === 0;
}