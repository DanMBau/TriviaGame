
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

            question: "Which nail grows fastest? ",
            choices: ["Middle", "Pinky", "Thumb", "Ring"],
            correct: "answer0",
        },
        {

            question: "Which is the only mammal that can’t jump?",
            choices: ["Cow", "Giraffe", "Rattlesnake", "Elephant"],
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
            $('.question').append(quest);
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


        var res0 = document.querySelector('input[name="group0"]:checked').value;

        var correct0 = [triviaQuestions[0].correct].toString()

        if (res0 === correct0) {
            correctAnswers++
        }
        else incorrectAnswers++;


        var res1 = document.querySelector('input[name="group1"]:checked').value;
        var correct1 = [triviaQuestions[1].correct].toString()

        if (res1 === correct1) {
            correctAnswers++
        }
        else incorrectAnswers++;

        var res2 = document.querySelector('input[name="group2"]:checked').value;
        var correct2 = [triviaQuestions[2].correct].toString()

        if (res2 === correct2) {
            correctAnswers++
        }
        else incorrectAnswers++;


        var res3 = document.querySelector('input[name="group3"]:checked').value;
        var correct3 = [triviaQuestions[3].correct].toString()

        if (res3 === correct3) {
            correctAnswers++
        }
        else incorrectAnswers++;




        console.log(res0)




        console.log('correct ' + correctAnswers)
        console.log('false ' + incorrectAnswers)


        $("#startOverButton").show();
        $(".correctA").show();
        $(".incorrectA").show();
        $("#stopButton").hide();
        $("span").show();

        $('.correctA').text(correctAnswers);
        $('.incorrectA').text(incorrectAnswers);



    }
    $("#startOverButton").click(function () {
        $(".question").empty();
        $("#startOverButton").hide();
        $("#stopButton").show();
        $(".correctA").hide();
        $(".incorrectA").hide();
        $("span").hide();

        newGame();
    })

    $("#game").hide();
    $("#gameOn").hide();
    $("#startOverButton").hide();
    $(".correctA").hide();
    $(".incorrectA").hide();
    $("span").hide();


    $("#startButton").click(function () {
        $("#startButton").hide();
        newGame()
        console.log(timerRunning)





    });

});  //closing brackets for .ready function


