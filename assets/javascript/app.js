var timerID;

var game = {
    correct: 0,
    incorrect: 0,
    time: 12,
    remainingTime: 0,
    questions: [
        {
            question: "The Samsung Galaxy Note 7 was recalled for what reason?",
            choices: ["Faulty screen", "Exploding battery", "Bad connector", "Low quality speaker"],
            answer: 1
        },
        {
            question: "Which movie came out in theatres first?",
            choices: ["Olympus Has Fallen", "White House Down", "", ""],
            answer: 0
        },
        {
            question: "When the game Team Fortress 2 came out, what was the first 'Meet The...' video to hit YouTube?",
            choices: ["Heavy", "Sniper", "Demoman", "Scout"],
            answer: 3
        }
    ],

    showQuestions: function() {
        $("#start").css("display", "none");
        $("#question").css("display", "block");
        $("#results").css("display", "none");
        $("#question").empty();

        // var timer = $("<h1>");
        // $(timer).attr("id", "timer");
        // $(timer).text("Time - 00:00");
        // $("#question").append(timer);

        for(var i = 0; i < this.questions.length; i++) {
            var question = $("<div>");
            var questionText = $("<h2>");
            $(questionText).text(this.questions[i].question);
            $(question).append(questionText);
            var form = $("<form>");
            $(form).attr("id", i);
            for(var j = 0; j < 4; j++){
                if(this.questions[i].choices[j] !== "") {
                    var answer = $("<input>");
                    $(answer).attr("type", "radio"); 
                    $(answer).attr("name", "answer");
                    $(answer).attr("value", j);                    
                    var answerText = $("<span>");
                    $(answerText).html(this.questions[i].choices[j] + "<br>");
                    $(form).append(answer);
                    $(form).append(answerText);
                }
            }
            $(question).append(form);
            $("#question").append(question);
        }
        var submitButton = $("<button>");
        $(submitButton).attr("id", "submit");
        $(submitButton).attr("class", "btn btn-danger");
        $(submitButton).text("Submit Quiz");
        $("#question").append(submitButton);
        this.remainingTime = this.time;
        timerID = setInterval(decrement, 1000);
        $("#timer").text("Time - 00:" + this.remainingTime);

        $("#submit").on("click", function() {
            for(var i = 0; i < game.questions.length; i++) {
                var answer = $("input[name=answer]:checked", "#"+i).val();
                answer = parseInt(answer);
                //console.log(answer);
                var correctAnswer = game.questions[i].answer;
                //console.log(correctAnswer);

                if(answer === correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }

            //console.log("Correct: " + game.correct);
            //console.log("Incorrect: " + game.incorrect);

            $("#question").css("display", "none");
            $("#results").css("display", "block");

            $("#theResults").text("The Results!");
            $("#correct").text(game.correct);
            $("#incorrect").text(game.incorrect);
            $("#score").text(parseInt((game.correct / game.questions.length) * 100) + "%");
            clearInterval(timerID);
        });

        
    }
        
};

function showQuestions() {
    game.showQuestions();
}

function resetGame() {
    game.correct = 0;
    game.incorrect = 0;
    game.showQuestions();
}

function decrement() {
    game.remainingTime--;
    
    if(game.remainingTime < 10) {
        $("#timer").text("Time - 00:0" + game.remainingTime);
    } else {
        $("#timer").text("Time - 00:" + game.remainingTime);
    }

    if(game.remainingTime === 0) {
        clearInterval(timerID);
        $("#question").css("display", "none");
        $("#results").css("display", "block");
        $("#theResults").text("Time's up!");
        $("#correct").text("N/A");
        $("#incorrect").text("N/A");
        $("#score").text("N/A");
    }
}