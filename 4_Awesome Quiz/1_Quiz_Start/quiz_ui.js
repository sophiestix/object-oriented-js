var QuizUI = {
    displayNext: function () {
        if (quiz.hasEnded()) {
            this.displayScore();
        } else {
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }
    },
    displayQuestion: function () {
        this.toHTML("question", quiz.getCurrentQuestion().text);
    },
    displayChoices: function () {
        var choices = quiz.getCurrentQuestion().choices;

        for(var i = 0; i < choices.length; i++) {
            this.toHTML("choice" + i, choices[i]);
            this.guessHandler("guess" + i, choices[i]);
        }
    },
    displayScore: function () {
        var gameOverHTML = "<h1>Game over</h1>";
        gameOverHTML += "<h2> Your score is: " + quiz.score + "</h2>";
        this.toHTML("quiz", gameOverHTML);
    },
    toHTML: function (id, text) {
        var element = document.getElementById(id);
        element.innerHTML = text;
    },
    guessHandler: function (id, guess) {
        var button = document.getElementById(id);
        button.onclick = function () {
            quiz.guess(guess);
            QuizUI.displayNext();
        }
    },
    displayProgress: function () {
        var currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.toHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
    }
}