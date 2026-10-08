const { grades } = require("./data");
const { calculateAverage } = require("./calculateAverage");
const { findTopStudent } = require("./findTopStudent");
const { filterFailed } = require("./filterFailed");
const { addLetterGrade } = require("./addLetterGrade");

function analyzeGrades(data = grades) {
  return {
    average: calculateAverage(data),
    topStudent: findTopStudent(data),
    failed: filterFailed(data, 60),
    withLetters: addLetterGrade(data)
  };
}

module.exports = { analyzeGrades, grades };