var names = ["Noor", "Ali", "Tasneem", "Alaa"];
var scores = [80, 75, 90, 85];
// Define the displayResults function
function displayResults() {
    // Calculate the average score
    var sum = 0;
    for (var i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    var average = sum / scores.length;
    
    // Find the highest score
    var highest = Math.max.apply(null, scores);
    
    // Add the results to the DOM
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Results</h2>" +
                            "<p>Average score: " + average.toFixed(2) + "</p>" +
                            "<p>Highest score: " + highest + "</p>";
  }
  
  // Define the displayScores function
  function displayScores() {
    // Get the scores table element
    var scoresTable = document.getElementById("scores_table");
    
    // Clear any existing rows
    scoresTable.innerHTML = "";
    
    // Add a header row
    var headerRow = scoresTable.insertRow(0);
    var nameHeader = headerRow.insertCell(0);
    nameHeader.innerHTML = "<b>Name</b>";
    var scoreHeader = headerRow.insertCell(1);
    
    scoreHeader.innerHTML = "<b>Score</b>";
    
    // Add a row for each name and score
    for (var i = 0; i < names.length; i++) {
      var row = scoresTable.insertRow(i + 1);
      var nameCell = row.insertCell(0);
      nameCell.innerHTML = names[i];
      var scoreCell = row.insertCell(1);
      scoreCell.innerHTML = scores[i];
    }
  }
  
  // Attach the functions to the buttons
  window.onload = function() {
    document.getElementById("btn-add").onclick = addScore;
    document.getElementById("btn-display-reuslt").onclick = displayResults;
    document.getElementById("btn-display-score").onclick = displayScores;
  };
  function addScore() {
    // Get the input values
    const nameInput = document.getElementById("name_input");
    const scoreInput = document.getElementById("score_input");
    const name = nameInput.value.trim();
    const score = parseFloat(scoreInput.value);
  
    // Validate the input
    if (name === "" || isNaN(score) || score < 0 || score > 100) {
      alert("You must enter a name and a valid score");
      return;
    }
  
    // Add the score to the arrays
    names.push(name);
    scores.push(score);
  
    // Clear the input fields and focus on the Name field
    nameInput.value = "";
    scoreInput.value = "";
    nameInput.focus();
  
    // Update the scores table and results
    displayScores();
    displayResults();
  }

