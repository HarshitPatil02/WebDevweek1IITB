// Event listener for the quiz button
document.getElementById('quizButton').addEventListener('click', function() {
    // Display the quiz when the button is clicked
    document.getElementById('quiz').style.display = 'block';
});

// Function to check the quiz answer
function checkAnswer() {
    // Get the user's answer and convert to lowercase
    var answer = document.getElementById('quizAnswer').value.toLowerCase();
    // Get the element to display the result
    var result = document.getElementById('quizResult');

    // Check if the answer is correct
    if (answer === 'your expected answer') {
        result.textContent = 'Correct!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Try again.';
        result.style.color = 'red';
    }
}
