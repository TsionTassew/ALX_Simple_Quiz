// Step 1: Define the function checkAnswer
function checkAnswer() {
    // Step 2: Declare the correct answer
    const correctAnswer = "4";

    // Step 3: Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = "";

    if (selectedOption) {
        userAnswer = selectedOption.value;
    }

    // Step 4: Compare user's answer with the correct answer
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);