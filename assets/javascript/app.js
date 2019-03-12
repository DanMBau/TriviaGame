
$(document).ready(function () {

    // global variables
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    var timerRunning = false;
    var timeLeft = 0






    console.log(timerRunning)

    var triviaQuestions = [

        {

            question: "What city was I born in?",
            choices: ["Bonn", "Cologne", "Munich", "New York"],
            correct: "answer0",
        },
        {

            question: "What's the fastest color?",
            choices: ["Yellow", "Purple", "Red", "Pink"],
            correct: "answer2",
        },
        {

            question: "What's the weather like",
            choices: ["cold", "don't know", "hot", "zzzzz"],
            correct: "answer0",
        },
        {

            question: "How about this game",
            choices: ["don't know", "how about it?", "Cheesecake", "how dare you?!"],
            correct: "answer3",
        },
    ];

    function questions() {
        for (var i = 0; i < 4; i++) {
            var quest = $(`
            <h3>${triviaQuestions[i].question}</h3>
            
            <input type="radio"  name=${"group" + [i]}
                value="answer0"><span>${triviaQuestions[i].choices[0]}</span>
            
            <input  type="radio"  name=${"group" + [i]}
                value="answer1"><span>${triviaQuestions[i].choices[1]}</span>
            
            <input type="radio"  name=${"group" + [i]}
                value="answer2"><span>${triviaQuestions[i].choices[2]}</span>
            
            <input  type="radio"  name=${"group" + [i]}
                value="answer3"><span>${triviaQuestions[i].choices[3]}</span>
            
            `)
            $('#questions').append(quest);
        }
    }


    function newGame() {

        $("#game").show();
        $("#gameOn").show();
        $("#intro").hide();
        startTimer();
        correctAnswers = 0;
        incorrectAnswers = 0;
        unanswered = 0;
        questions();

    }

    function startTimer() {
        timerRunning = true;
        var timeLeft = 50;
        var downloadTimer = setInterval(function () {
            document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
            timeLeft -= 1;

            if (timeLeft <= 0) {
                clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML = "Game Over";
                gameOver();

            }
        }, 1000);

        $("#stopButton").one("click", function () {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Game Over";
            gameOver();
        })
    };

    function stopTimer() {
        var timeLeft = 0;
    }



    function gameOver() {


        var res1 = document.querySelector('input[name="group0"]:checked').value;
        console.log(res1)
        var res2 = document.querySelector('input[name="group1"]:checked').value;
        console.log(res2)
        var res3 = document.querySelector('input[name="group2"]:checked').value;
        console.log(res3)
        var res4 = document.querySelector('input[name="group3"]:checked').value;
        console.log(res4)
        if (res1 === [triviaQuestions[0].correct[0]]) {
            correctAnswers++
        }
        else incorrectAnswers++
        console.log(correctAnswers)
        console.log(incorrectAnswers)


        $("#startOverButton").show();



    }
    $("#startOverButton").click(function () {
        $("#questions").empty();
        $("#startOverButton").hide();

        newGame();
    })
    $("#game").hide();
    $("#gameOn").hide();
    $("#startOverButton").hide();

    $("#startButton").click(function () {
        $("#startButton").hide();
        newGame()
        console.log(timerRunning)





    });

});  //closing brackets for .ready function





