const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let averageGrade = calculateAverage(marks);

  if (averageGrade < 60) return "F";
  if (averageGrade < 70) return "D";
  if (averageGrade < 80) return "C";
  if (averageGrade < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  console.log("Grade");
  let sum = 0;

  for (let i in array) sum += array[i];

  return sum / marks.length;
}
