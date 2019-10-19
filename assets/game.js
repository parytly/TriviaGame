// TIMER
var timer = 31;
var intervalId;

// START THE GAME
function start() {
    $("#run").on("click", function(run){
        clearInterval(intervalId);
        intervalId = setInterval (decrement, 1000);
        console.log("starting the game")
    });

function decrement(){
    timer--;
    $("#timeclock").text(timer);
    if (timer === 0){
        // alert("Times Up!!!");
        stop();
    };
};
decrement();

function stop(){
    clearInterval(intervalId);
};
};
start();

// LIST OF QUESTIONS
var questionList = [
{   question: "Which city is nickname, 'The Big Apple'?",
    choices: ["Los Angeles ", "Paris ", "New York City ", "Phoenix "],

},
{   question: "Who was the first president of the United States of America?",
    choices: ["Trump", "Washington", "Obama", "Lincoln"],
},
{   question: "What year was the first phone invented?",
    choices: ["1900", "2010", "1945", "1876"],
},
{   question: "Which team won the first ever NFL Superbowl?",
    choices: ["Raiders", "Packers", "Cowboys", "Lions"],
},
{   question: "How much is 1 kilogram in a pound?",
    choices: ["5.5 lbs", "1.2 lbs", "2.2 lbs", "2.5 lbs"],
},
{   answer: ["new york city", "washington", "1876", "packers", "2.2 lbs"]
},
];

// DISPLAY QUIZ QUESTION AND CHOICES
function displayQuiz(){
    // QUESTION 1
    $("#questionOne").append(questionList[0].question);
   
    $(".q1c1").append(questionList[0].choices[0]);
    $(".q1c2").append(questionList[0].choices[1]);
    $(".q1c3").append(questionList[0].choices[2]);
    $(".q1c4").append(questionList[0].choices[3]);
    
    // QUESTION 2
    $("#questionTwo").append(questionList[1].question);
    
    $(".q2c1").append(questionList[1].choices[0]);
    $(".q2c2").append(questionList[1].choices[1]);
    $(".q2c3").append(questionList[1].choices[2]);
    $(".q2c4").append(questionList[1].choices[3]);
    
    // QUESTION 3
    $("#questionThree").append(questionList[2].question);
    $(".q3c1").append(questionList[2].choices[0]);
    $(".q3c2").append(questionList[2].choices[1]);
    $(".q3c3").append(questionList[2].choices[2]);
    $(".q3c4").append(questionList[2].choices[3]);
    
    // QUESTION 4
    $("#questionFour").append(questionList[3].question);
    $(".q4c1").append(questionList[3].choices[0]);
    $(".q4c2").append(questionList[3].choices[1]);
    $(".q4c3").append(questionList[3].choices[2]);
    $(".q4c4").append(questionList[3].choices[3]);
    
    // QUESTION 3
    $("#questionFive").append(questionList[4].question);
    $(".q5c1").append(questionList[4].choices[0]);
    $(".q5c2").append(questionList[4].choices[1]);
    $(".q5c3").append(questionList[4].choices[2]);
    $(".q5c4").append(questionList[4].choices[3]);
};
    
displayQuiz();

var score = 0;

$(".userInput1").on("click", function(event){
    var userSelection = $('input[class=userInput1]:checked').val();
    console.log(userSelection);
    for (var a = 0; a < questionList[5].answer.length; a++){
        var answerlist = questionList[5].answer[a];
        // console.log(answerlist);
        if (userSelection === answerlist){
            score++;
            console.log(score);
        };
    };
});
$(".userInput2").on("click", function(event){
    var userSelection = $('input[class=userInput2]:checked').val();
    console.log(userSelection);
    for (var a = 0; a < questionList[5].answer.length; a++){
        var answerlist = questionList[5].answer[a];
        // console.log(answerlist);
        if (userSelection === answerlist){
            score++;
            console.log(score);
        };
    };
});
$(".userInput3").on("click", function(event){
    var userSelection = $('input[class=userInput3]:checked').val();
    console.log(userSelection);
    for (var a = 0; a < questionList[5].answer.length; a++){
        var answerlist = questionList[5].answer[a];
        // console.log(answerlist);
        if (userSelection === answerlist){
            score++;
            console.log(score);
        };
    };
});
$(".userInput4").on("click", function(event){
    var userSelection = $('input[class=userInput4]:checked').val();
    console.log(userSelection);
    for (var a = 0; a < questionList[5].answer.length; a++){
        var answerlist = questionList[5].answer[a];
        // console.log(answerlist);
        if (userSelection === answerlist){
            score++;
            console.log(score);
        };
    };
});
$(".userInput5").on("click", function(event){
    var userSelection = $('input[class=userInput5]:checked').val();
    console.log(userSelection);
    for (var a = 0; a < questionList[5].answer.length; a++){
        var answerlist = questionList[5].answer[a];
        // console.log(answerlist);
        if (userSelection === answerlist){
            score++;
            console.log(score);
        };
    };
});


// FINISH THE GAME WHEN CLICKING ON THE DONE BUTTON
function finish(){
    $("#doneButton").on("click",function(){
        clearInterval(intervalId);
        console.log("finish");
        $("#quizContainer").hide();
        $("#result").append("<div> Your Score:  </div>")
    });
};
finish();