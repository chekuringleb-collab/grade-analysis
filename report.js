const { analyzeGrades } = require("./main");

const result = analyzeGrades();

console.log("=== Анализ успеваемости ===");
console.log(`1. Средний балл группы: ${result.average.toFixed(2)}`);
console.log(`2. Лучший студент: ${result.topStudent}`);
console.log(`3. Должники: ${result.failed.join(", ")}`);
console.log("4. Итоговый массив с буквенными оценками:");
console.table(result.withLetters);