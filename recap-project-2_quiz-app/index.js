const bookmarkIcon = document.querySelector(".bookmark__icon");

bookmarkIcon.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("bookmark--active");
});

const answer = document.querySelector(".card__answer");

const answerButton = document.querySelector(".card__button-answer");

answerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");
  if (answer.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = "Show answer";
  }
});
