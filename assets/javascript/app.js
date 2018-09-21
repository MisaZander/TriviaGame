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
        for(var i = 0; i < this.questions.length; i++) {
            var question = $("<div>");
            var questionText = $("<h2>");
            $(questionText).text(this.questions[i].question);
            $(question).append(questionText);
            var form = $("<form>");
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
    }
        
};

function showQuestions() {
    $("#start").css("display", "none");
    $("#question").css("display", "block");
    game.showQuestions();
}

