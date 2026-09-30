import { sort } from "./sort";
import { binarySearch } from "./binarySearch";
import { isBalanced } from "./brackets";

const arr = [5, 2, 9, 1, 5, 6, 3, 8, 4, 7];
console.log("Исходный:   ", arr);
const sorted = sort(arr);
console.log("Отсортирован:", sorted);

console.log("Ищем 7: ", binarySearch(sorted, 7), " индекс");

console.log("\nПроверка скобок:");

console.log("({})\t - ", isBalanced("({})"));
console.log("({)}\t - ", isBalanced("({)}"));
console.log("()[]{}\t - ", isBalanced("()[]{}"));
console.log("([{}])\t - ", isBalanced("([{}])"));
console.log("(\t - ", isBalanced("("));