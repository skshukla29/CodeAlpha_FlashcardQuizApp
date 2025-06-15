let flashcards = [
  { question: "What is HTML?", answer: "HyperText Markup Language" },
  { question: "What is CSS?", answer: "Cascading Style Sheets" }
];

let currentIndex = 0;

function showCard(index) {
  document.getElementById("question").textContent = flashcards[index].question;
  document.getElementById("answer").textContent = flashcards[index].answer;
  document.getElementById("answer").classList.add("hidden");
}

function toggleAnswer() {
  document.getElementById("answer").classList.toggle("hidden");
}

function nextCard() {
  if (currentIndex < flashcards.length - 1) currentIndex++;
  showCard(currentIndex);
}

function prevCard() {
  if (currentIndex > 0) currentIndex--;
  showCard(currentIndex);
}

function addCard() {
  let q = document.getElementById("newQuestion").value;
  let a = document.getElementById("newAnswer").value;
  if (q && a) {
    flashcards.push({ question: q, answer: a });
    alert("Flashcard Added!");
    document.getElementById("newQuestion").value = "";
    document.getElementById("newAnswer").value = "";
  }
}
function deleteCard() {
  if (flashcards.length === 0) return;

  // Remove current flashcard
  flashcards.splice(currentIndex, 1);

  // Adjust index
  if (currentIndex > 0) {
    currentIndex--;
  }

  // Show next card or empty state
  if (flashcards.length > 0) {
    showCard(currentIndex);
  } else {
    document.getElementById("question").textContent = "No cards left.";
    document.getElementById("answer").textContent = "";
    document.getElementById("answer").classList.add("hidden");
  }
}


window.onload = () => {
  showCard(currentIndex);
};
