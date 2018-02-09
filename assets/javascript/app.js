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

$("#display").text("5")
//variable for timer
var number = 5;

//correct, incorrect, unanswered 
var totalCorrect;
var totalIncorrect;
var totalUnanswered;

//object to hold multiple choice questions
var multipleChoice = [
    {
        question: "How many Americans died of drug overdose in 2016?",
        answers: {
            a: "13,740",
            b: "52,404",
            c: "9,498"
        },
        correctAnswer: "52,404"
    },
    {
        question: "Opioids were involved in how many of all drug overdoses in 2016?",
        answers: {
            a: "Less than 15%",
            b: "35%",
            c: "Over 60%"
        },
        correctAnswer: "Over 60%"
    },
    {
        question: "How many drug overdoses in 2016 resulted from marijuana?",
        answers: {
            a: "None",
            b: "Over 80%",
            c: "It doesn't matter, marijuana is evil!"
        },
        correctAnswer: "None!"
    }, {
        question: "The American Pharmaceutical Industry spent how much in lobbying Congress in 2016?",
        answers: {
            a: "$2,500,000",
            b: "$37,900",
            c: "$152,000,000"
        },
        correctAnswer: "#152,000,000"
    },
    {
        question: "Question 5?",
        answers: {
            a: "This",
            b: "That",
            c: "Other"
        },
        correctAnswer: "a"
    },
];

//variable to hold correct answers
var correctAnswer;

//variable to hold incorrect answers
var incorrectAnswers;

//variable to hold userChoices
var userChoice;

var correctUser;
var incorrectUser;

var button;

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

function secondQuestion() {
    number = 5;
    intervalId = setInterval(decrementTwo, 1000);
    $("#display").show();
    $(".answer").show();
    $("#display").text("5");
    $(".answer").text("");
    $("#question").text("");
    $("#question").append("<h1>" + multipleChoice[1].question);
    $("#a").append(multipleChoice[1].answers.a);
    $("#b").append(multipleChoice[1].answers.b);
    $("#c").append(multipleChoice[1].answers.c);

    console.log(multipleChoice[1].question)
    console.log("the answer is " + multipleChoice[1].answers.a)
}

function thirdQuestion() {
    number = 5;
    intervalId = setInterval(decrementThree, 1000);
    $("#display").show();
    $(".answer").show();
    $("#display").text("5");
    $(".answer").text("");
    $("#question").text("");
    $("#question").append("<h1>" + multipleChoice[2].question);
    $("#a").append(multipleChoice[2].answers.a);
    $("#b").append(multipleChoice[2].answers.b);
    $("#c").append(multipleChoice[2].answers.c);

    console.log(multipleChoice[2].question)
    console.log("the answer is " + multipleChoice[2].answers.a)
}

function fourthQuestion() {
    number = 5;
    intervalId = setInterval(decrementFour, 1000);
    $("#display").show();
    $(".answer").show();
    $("#display").text("5");
    $(".answer").text("");
    $("#question").text("");
    $("#question").append("<h1>" + multipleChoice[3].question);
    $("#a").append(multipleChoice[3].answers.a);
    $("#b").append(multipleChoice[3].answers.b);
    $("#c").append(multipleChoice[3].answers.c);

    console.log(multipleChoice[3].question)
    console.log("the answer is " + multipleChoice[3].answers.a)
}


// $("#start").click(function () {
//     $("#start").hide();
// })

function decrement() {
    number--;
    $("#display").html(number);
    if (number === 0) {
        stop()
    }
}

function decrementTwo() {
    number--;
    $("#display").html(number);
    if (number === 0) {
        stopTwo()

    }
}

function decrementThree() {
    number--;
    $("#display").html(number);
    if (number === 0) {
        stopThree()

    }
}

function decrementFour() {
    number--;
    $("#display").html(number);
    if (number === 0) {
        stopFour()

    }
}

// function decrementTwo() {


//      $("#display").html(number);
// }

//function to stop timer

function stop() {
    clearInterval(intervalId);
    $("#display").hide();
    $(".answer").hide();
    breakPage()
}

function stopTwo() {
    clearInterval(intervalId);
    $("#display").hide();
    $(".answer").hide();
    breakPageTwo()
}

function stopThree() {
    clearInterval(intervalId);
    $("#display").hide();
    $(".answer").hide();
    breakPageThree()
}

function stopFour() {
    clearInterval(intervalId);
    $("#display").hide();
    $(".answer").hide();
    breakPageFour()
}


function breakPage() {
    $("#question").html("<h1> Time's Up! <br>" + "<h2> The correct answer is: " + multipleChoice[0].correctAnswer);
    setTimeout(secondQuestion, 1000 * 3);
}

function breakPageTwo() {
    $("#question").html("<h1> Time's Up! <br>" + "<h2> The correct answer is: " + multipleChoice[1].correctAnswer);
    setTimeout(thirdQuestion, 1000 * 3);
}

function breakPageThree() {
    $("#question").html("<h1> Time's Up! <br>" + "<h2> The correct answer is: " + multipleChoice[2].correctAnswer);
    setTimeout(fourthQuestion, 1000 * 3);
}

function breakpageFour() {
    $("#question").html("<h1> Time's Up! <br>" + "<h2> The correct answer is: " + multipleChoice[3].correctAnswer);
    setTimeout(endGame, 1000 * 3);
}

function endGame (){
    
}

//function to switch timer for new question
















// function youWin() {
//     $("#display").hide();
//     $("#question").text("Correct!")

// }

//timecounter at top of page

