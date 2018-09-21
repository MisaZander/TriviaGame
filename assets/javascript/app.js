var game = {
    correct: 0,
    incorrect: 0,
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
                    $(answerText).text(this.questions[i].choices[j]);
                    $(form).append(answer);
                    $(form).append(answerText);
                }
            }
            $(question).append(form);
            $("#question").append(question);
        }
        var submitButton = $("<button>");
        $(submitButton).attr("id", "submit");
        $(submitButton).text("Submit Quiz");
        $("#question").append(submitButton);

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
        });
    }
        
};

function showQuestions() {
    game.showQuestions();
}

