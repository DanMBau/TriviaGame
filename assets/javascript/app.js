
$(document).ready(function () {

    // global variables
    var intervalId;
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
            correct: 0,
        },
        {

            question: "What's the fastest color?",
            choices: ["Yellow", "Purple", "Red", "Pink"],
            correct: 2,
        },
        {

            question: "What's the weather like",
            choices: ["cold", "don't know", "hot", "zzzzz"],
            correct: 0,
        },
        {

            question: "How about this game",
            choices: ["don't know", "how about it?", "Cheesecake", "how dare you?!"],
            correct: 1,
        },
    ];

    function questions() {
        console.log('1st question' + triviaQuestions.question)
        for (var i = 0; i < 4; i++) {
            var quest = $(`
                <h3 class="text-center">${triviaQuestions[i].question}</h3>
              <ul>
                    <li>
                        <button type="button" id="button1"
                        class="btn btn-outline-secondary p-3 "></button><span>${triviaQuestions[i].choices[0]}</span>
                    </li> 
                    <li>
                        <button type="button" id="button2"
                        class="btn btn-outline-secondary p-3 "></button><span>${triviaQuestions[i].choices[1]}</span>
                    </li> 
                    <li>
                        <button type="button" id="button3"
                        class="btn btn-outline-secondary p-3 "></button><span>${triviaQuestions[i].choices[2]}</span>
                    </li> 
                    <li>
                        <button type="button" id="button4"
                        class="btn btn-outline-secondary p-3 "></button><span>${triviaQuestions[i].choices[3]}</span>
                    </li>  
               </ul>
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
        var timeleft = 50;
        var downloadTimer = setInterval(function () {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
            timeleft -= 1;
            if (timeleft <= 0) {
                clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML = "Game Over"
            }
        }, 1000);

    };


    $("#game").hide();
    $("#gameOn").hide();
    $("#startButton").click(function () {
        $("#startButton").hide();
        newGame()
        console.log(timerRunning)
    });


});  //closing brackets for .ready function





