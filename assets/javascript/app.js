//start button to begin game which starts clock

window.onload = function () {
    $("#start").on("click", startGame);
    $("#start").click(function () {
        $("#start").hide();
    })

    // $(".answer").click(function () {
    // });
}

//variables for scoreboard

$("#display").text("10")
//variable for timer
var number = 10;

var images = []

//correct, incorrect, unanswered 
var totalCorrect = 0;
var totalIncorrect = 0;
var totalUnanswered = 0;

//object to hold multiple choice questions
var multipleChoice = [
    {
        question: "How many Americans died of <br>drug overdose in 2016?",
        answers: {
            a: "13,740",
            b: "52,404",
            c: "9,498"
        },
        correctAnswer: "52,404."
    },
    {
        question: "What percentage of drug overdoses <br> in America were associated with Opioids<br> inn 2016?",
        answers: {
            a: "Less than 15%",
            b: "Approximately 35%",
            c: "Over 60%"
        },
        correctAnswer: "Over 60%."
    },
    {
        question: "What percentage of drug overdoses in <br>2016 resulted from marijuana?",
        answers: {
            a: "0%",
            b: "Over 80%",
            c: "Nearly 30%"
        },
        correctAnswer: "0%."
    }, {
        question: "The American Pharmaceutical Industry <br>spent how much lobbying Congress <br> in 2016?",
        answers: {
            a: "$2,500,000",
            b: "$37,900",
            c: "$152,000,000"
        },
        correctAnswer: "$152,000,000."
    },
];

//variable to hold correct answers
var correctAnswer;

//variable to hold incorrect answers
var incorrectAnswers;

//variable to hold userChoices
var userChoice;

// var correctUser = 0;
// var incorrectUser = 0;
// var unanswered = 0;
var user;
// var button;

//variable to hold setINterval to run clock
var intervalId;

//messages for each question
//correct, incorrect, out of time

//function to start timer

function startGame() {
    intervalId = setInterval(decrement, 1000);
    $("#question").append("<h1>" + multipleChoice[0].question);
    $("#a").append(multipleChoice[0].answers.a);
    $("#b").append(multipleChoice[0].answers.b);
    $("#c").append(multipleChoice[0].answers.c);

    // console.log(multipleChoice[0].question)
    // console.log("the answer is " + multipleChoice[0].answers.b)

    // if ($("#start").on("click", youWin))
    // for (var i = 0; i < multipleChoice.length; i++) {
    // + "<h1>" + multipleChoice[i].answers.a +
    //     "<h1>" + multipleChoice[i].answers.b + "<h1>" + multipleChoice[i].answers.c)
    // console.log(multipleChoice[i].question)
    // }

    //

}


function correctChoiceOne() {
    $("#display").hide();
    $(".answer").hide();
    $("#question").html("<h1> Correct! The answer is " + multipleChoice[0].correctAnswer);
    setTimeout(secondQuestion, 1000 * 5);
    console.log("Correct Choice =" + totalCorrect);
}

function correctChoiceTwo() {
    $("#display").hide();
    $(".answer").hide();
    $("#question").html("<h1> Correct! The answer is " + multipleChoice[1].correctAnswer);
    setTimeout(thirdQuestion, 1000 * 5);
    console.log("Correct Choice =" + totalCorrect);
}
function correctChoiceThree() {
    $("#display").hide();
    $(".answer").hide();
    $("#question").html("<h1> Correct! The answer is " + multipleChoice[2].correctAnswer);
    setTimeout(fourthQuestion, 1000 * 5);
    console.log("Correct Choice =" + totalCorrect);
}

function correctChoiceFour() {
    $("#display").hide();
    $(".answer").hide();
    $("#question").html("<h1> Correct! The answer is " + multipleChoice[3].correctAnswer);
    setTimeout(endQuiz, 1000 * 5);
    console.log("Correct Choice =" + totalCorrect);
}



function wrongChoiceOne() {
    $("#display").hide();
    $(".answer").hide();
    $("#question").html("<h1> Wrong! The answer is " + multipleChoice[0].correctAnswer);
    setTimeout(secondQuestion, 1000 * 5);
    console.log("Correct Choice =" + totalIncorrect);
}

function wrongChoiceTwo() {
    $("#display").hide();
    $(".answer").hide();
    $("#question").html("<h1> Wrong! The answer is " + multipleChoice[1].correctAnswer);
    setTimeout(thirdQuestion, 1000 * 5);
    console.log("Correct Choice =" + totalIncorrect);
}

function wrongChoiceThree() {
    $("#display").hide();
    $(".answer").hide();
    $("#question").html("<h1> Wrong! The answer is " + multipleChoice[2].correctAnswer);
    setTimeout(fourthQuestion, 1000 * 5);
    console.log("Correct Choice =" + totalIncorrect);
}

function wrongChoiceFour() {
    $("#display").hide();
    $(".answer").hide();
    $("#question").html("<h1> Wrong! The answer is " + multipleChoice[3].correctAnswer);
    setTimeout(endQuiz, 1000 * 5);
    console.log("Correct Choice =" + totalIncorrect);
}


function secondQuestion() {
    clearInterval(intervalId);
    $("#display").show();
    $(".answer").show();
    $(".answer").text("");
    $("#question").text("");
    $("#display").text("10");
    number = 10;
    intervalId = setInterval(decrementTwo, 1000);
    $("#question").append("<h1>" + multipleChoice[1].question);
    $("#a").append(multipleChoice[1].answers.a);
    $("#b").append(multipleChoice[1].answers.b);
    $("#c").append(multipleChoice[1].answers.c);

}

function thirdQuestion() {
    clearInterval(intervalId);
    $("#display").show();
    $(".answer").show();    
    $(".answer").text("");
    $("#question").text("");
    $("#display").text("10");
    number = 10;
    intervalId = setInterval(decrementThree, 1000);
    $("#question").append("<h1>" + multipleChoice[2].question);
    $("#a").append(multipleChoice[2].answers.a);
    $("#b").append(multipleChoice[2].answers.b);
    $("#c").append(multipleChoice[2].answers.c);

}

function fourthQuestion() {
    clearInterval(intervalId);
    $("#display").show();
    $(".answer").show();
    $(".answer").text("");
    $("#question").text("");
    $("#display").text("10");
    number = 10;
    intervalId = setInterval(decrementFour, 1000);
    $("#question").append("<h1>" + multipleChoice[3].question);
    $("#a").append(multipleChoice[3].answers.a);
    $("#b").append(multipleChoice[3].answers.b);
    $("#c").append(multipleChoice[3].answers.c);

}

function decrement() {
    number--;
    $("#display").html(number);
    $(".answer").on("click", function () {

        if ($(document).on("click", "#b", correctChoiceOne))
        totalCorrect++;
    });
    $(".answer").on("click", function () {
        if ($(document).on("click", "#a", wrongChoiceOne))
        totalIncorrect++;
    });
    $(".answer").on("click", function () {
        if ($(document).on("click", "#c", wrongChoiceOne))
        totalIncorrect++;
    });
    if (number === 0) {
        totalUnanswered++;
        stop()
        console.log(totalUnanswered)
    }
}

function decrementTwo() {
    number--;
    $("#display").html(number);
    $(".answer").on("click", function () {

        if ($(document).on("click", "#c", correctChoiceTwo))
        totalCorrect++;
    });
    $(".answer").on("click", function () {
        if ($(document).on("click", "#a", wrongChoiceTwo))
        totalIncorrect++;
    });
    $(".answer").on("click", function () {
        if ($(document).on("click", "#b", wrongChoiceTwo))
        totalIncorrect++;
    });
    if (number === 0) {
        totalUnanswered++;
        stopTwo()
        console.log(totalUnanswered)

    }
}

function decrementThree() {
    number--;
    $("#display").html(number);
    $(".answer").on("click", function () {

        if ($(document).on("click", "#a", correctChoiceThree))
        totalCorrect++;
    });
    $(".answer").on("click", function () {
        if ($(document).on("click", "#b", wrongChoiceThree))
        totalIncorrect++;
    });
    $(".answer").on("click", function () {
        if ($(document).on("click", "#c", wrongChoiceThree))
        totalIncorrect++;
    });
    if (number === 0) {
        totalUnanswered++;
        stopThree()
        console.log(totalUnanswered)

    }
}

function decrementFour() {
    number--;
    $("#display").html(number);
    $(".answer").on("click", function () {

        if ($(document).on("click", "#c", correctChoiceFour))
        totalCorrect++;
    });
    $(".answer").on("click", function () {
        if ($(document).on("click", "#a", wrongChoiceFour))
        totalIncorrect++;
    });
    $(".answer").on("click", function () {
        if ($(document).on("click", "#b", wrongChoiceFour))
        totalIncorrect++;
    });
    if (number === 0) {
        totalUnanswered++;
        stopFour()
        console.log(totalUnanswered)

    }
}

function stop() {
    clearInterval(intervalId);
    $("#display").hide();
    $(".answer").hide();
    $("#question").html("<h1> Time's Up! <br>" + "<h2> The correct answer is " + multipleChoice[0].correctAnswer);
    setTimeout(secondQuestion, 1000 * 3);
}

function stopTwo() {
    clearInterval(intervalId);
    $("#display").hide();
    $(".answer").hide();
    $("#question").html("<h1> Time's Up! <br>" + "<h2> The correct answer is " + multipleChoice[1].correctAnswer);
    setTimeout(thirdQuestion, 1000 * 3);
}

function stopThree() {
    clearInterval(intervalId);
    $("#display").hide();
    $(".answer").hide();
    $("#question").html("<h1> Time's Up! <br>" + "<h2> The correct answer is " + multipleChoice[2].correctAnswer);
    setTimeout(fourthQuestion, 1000 * 3);
}

function stopFour() {
    clearInterval(intervalId);
    $("#display").hide();
    $(".answer").hide();
    $("#question").html("<h1> Time's Up! <br>" + "<h2> The correct answer is " + multipleChoice[3].correctAnswer);
    setTimeout(endQuiz, 1000 * 3);
}


function endQuiz() {
    clearInterval(intervalId)
    $("#display").hide();
    $(".answer").show();
    $(".answer").text("");
    $("#question").text("");
    $("#question").html("<h1> Let's see how you did!");
    $("#scoreboard").html("<h2> Correct Answers: " + totalCorrect + "<br>" + "<h2> Incorrect Answers: " + totalIncorrect + "<br>" + "<h2> Unanswered: " + totalUnanswered + "<br>");
    $("#start").show();
    $("#start").html("<h2> Restart? </h2>");
    $("#start").on("click", restartGame);
    $("#start").click(function () {
        $("#start").hide();

    })
}

function restartGame () {
    location.reload();
}

function clickable() {
    $(".answers").on("click ")
}