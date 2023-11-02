function calculateGPA() {
  // Mapping of letter grades to grade points
  const gradePointsMap = {
    'A+': 4.3, 'A': 4, 'A-': 3.7,
    'B+': 3.3, 'B': 3, 'B-': 2.7,
    'C+': 2.3, 'C': 2, 'C-': 1.7,
    'D+': 1.3, 'D': 1, 'D-': 0.7,
    'F': 0
  };

  // Get the selected grades or numbers
  const mathInput = document.getElementById('mathScore').value;
  const scienceInput = document.getElementById('scienceScore').value;
  const languageInput = document.getElementById('languageScore').value;

  // Function to convert input to grade points
  const convertToGradePoints = (input) => {
    if (gradePointsMap.hasOwnProperty(input.toUpperCase())) {
      return gradePointsMap[input.toUpperCase()];
    } else if (!isNaN(parseFloat(input))) {
      // If input is a number, use it directly
      return parseFloat(input);
    } else {
      return null; // Invalid input
    }
  };

  // Convert inputs to grade points
  const mathScore = convertToGradePoints(mathInput);
  const scienceScore = convertToGradePoints(scienceInput);
  const languageScore = convertToGradePoints(languageInput);

  // Check if any input is invalid
  if (mathScore === null || scienceScore === null || languageScore === null) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `Please enter valid numbers or letter grades.`;
    return;
  }

  // GPA calculation
  const totalSubjects = 3;
  const totalScore = mathScore + scienceScore + languageScore;
  const gpa = totalScore / totalSubjects;

  displayResult(gpa);
}

function displayResult(gpa) {
  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = `<h4>Your GPA is: ${gpa.toFixed(2)}</h4>`;
}