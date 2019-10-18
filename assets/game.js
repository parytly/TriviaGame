// TIMER
var timer = 45;
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
{   question: "Who is the strongest?",
    choices: ["godzilla ", "king kong ", "t-rex ", "goku "],
    answer: "godzilla"
},
{   question: "Who was the first president of the USA?",
    choices: ["trump", "washington", "obama", "lincoln"],
    anwser: "washington"
},
{   question: "Where is the captiol of Cailfornia?",
    choices: ["los angeles", "sacramento", "chico", "new york"],
    answer: "sacramento"
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
};
    
displayQuiz();



// CHECK USERS SELECTIONS
function checkAnswer (){

};
checkAnswer();

// FINISH THE GAME WHEM CLICKING ON THE DONE BUTTON
function finish(){
    $("#doneButton").on("click",function(){
        clearInterval(intervalId);
        console.log("finish");
        $("#quiz").hide();
        // $("#quiz").show(results);

    });
};
finish();