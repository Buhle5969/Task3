document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    const quizQuestions = [
        {
            question: "What is Nobuhle surname?",
            answers: {
                a: "Cimele",
                b: "Kwebane",
                c: "Cimile"
            },
            correctAnswer: "a"
        },
        {
            question: "Who is the CEO of Tesla?",
            answers: {
                a: "Jeff Bezos",
                b: "Elon Musk",
                c: "Bill Gates"
            },
            correctAnswer: "b"
        },
        {
            question: "Where do you live?",
            answers: {
                a: "Johannesburg",
                b: "Pretoria",
                c: "Mthatha"
            },
            correctAnswer: "b"
        }
    ];

    function buildQuiz() {
        const output = [];

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} : ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="choices"> ${answers.join('')} </div>`
            );
        });

        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.choices');

        let numCorrect = 0;

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = `You got ${numCorrect} out of ${quizQuestions.length} correct.`;
    }

    buildQuiz();

    submitButton.addEventListener('click', showResults);
});
