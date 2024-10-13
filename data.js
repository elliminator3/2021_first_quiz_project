const goButton = document.getElementById("go-btn");
const quizBox = document.getElementById("quiz_box");
const nextButton = document.getElementById("next_btn");
const resultBox = document.getElementById("result_box");

let que_count = 0;
let que_numb = 1;
let userScore = 0;

var answered = {};

goButton.onclick = () => {
  startGame();
  showQuestionsNumbers();
};
nextButton.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuestions(que_count);
    showQuestionsNumbers();
    cleanUp();
  } else {
    showResult();
  }
};

function startGame() {
  quizBox.classList.remove("hide");
  showQuestions(0);
}

function showResult() {
  quizBox.classList.add("hide");
  resultBox.classList.remove("hide");

  const scoreText = document.getElementById("score_text");
  if (userScore > 8) {
    let scoreTag =
      "<span> Wir verneigen uns vor der Musik Gottheit. Du hast <span>" +
      userScore +
      "</span> von  10 Fragen richtig beantwortet</span>";
    scoreText.innerHTML = scoreTag;
  } else if (userScore > 5) {
    let scoreTag =
      "<span> There is a Master in the making. Du hast <span>" +
      userScore +
      "</span> von  10 Fragen richtig beantwortet, aber da geht noch mehr!</span>";
    scoreText.innerHTML = scoreTag;
  } else if (userScore > 3) {
    let scoreTag =
      "<span> Da geht noch was! Lets Go go go! Du hast <span>" +
      userScore +
      "</span> von  10 Fragen richtig beantwortet, aber da geht noch mehr!</span>";
    scoreText.innerHTML = scoreTag;
  } else {
    let scoreTag =
      "<span> Ups! Schon mal an Musik-Nachhilfe gedacht? Du hast <span>" +
      userScore +
      "</span> von  10 Fragen richtig beantwortet. Probier es noch einmal.:/ </span>";
    scoreText.innerHTML = scoreTag;
  }
}

function showQuestions(index) {
  const que_text = document.getElementById("que_tex");

  const footer_total_que = document.getElementById("total_que");
  const scoreText = document.getElementById("score_number");
  var options = document.getElementsByClassName("option");

  let que_tag = " <span>" + questions[index].question + "</span>";
  for (var i = 0; i < options.length; i++) {
    options[i].innerHTML = questions[index].options[i];
  }

  let footerQuestionCount = "<span>" + que_count + "/10</span>";
  let getUserScore = "<span>" + userScore + "</span>";

  que_text.innerHTML = que_tag;
  footer_total_que.innerHTML = footerQuestionCount;
  scoreText.innerHTML = getUserScore;
}

function showQuestionsNumbers(index) {
  const footer_total_que = document.getElementById("total_que");
  let footerQuestionCount = "<span>" + que_numb + "/10</span>";
  footer_total_que.innerHTML = footerQuestionCount;
}

var options = document.getElementsByClassName("option");
for (let option of options) {
  option.addEventListener("click", checkAnswer);
}

function cleanUp() {
  for (let option of options) {
    option.classList.remove("correct");
    option.classList.remove("incorrect");
  }
}

function checkAnswer(event) {
  if (
    event.target.innerHTML === questions[que_count].answer &&
    answered[que_count] == null
  ) {
    userScore++;
    event.target.classList.add("correct");
    event.target.classList.add("correct:hover");
  } else if (
    event.target.innerHTML !== questions[que_count].answer &&
    answered[que_count] == null
  ) {
    event.target.classList.add("incorrect");
    event.target.classList.add("incorrect:hover");
  } else if (answered[que_count] != null) {
    alert("Bereits beantwortet");
  }
  answered[que_count] = true;
}

let questions = [
  {
    question: "Welches ist das meist verkaufte Album der Welt?",
    answer: "Thriller - Michael Jackson 1982",
    options: [
      "Thriller - Michael Jackson 1982",
      "Back in Black - AC/DC 1980",
      "The Dark side of the moon - Pink Floyd 1973",
      " The Bodyguard - Whitney Housten 1992"
    ]
  },
  {
    question: "Wie viel musik wurden 2020 in deutschland gestreamt?",
    answer: "139 Millarden streams",
    options: [
      "107 Millarden streams",
      "79,5 Millarden streams",
      "153 Millarden streams",
      "139 Millarden streams"
    ]
  },
  {
    question: "Wer hat die meisten Grammys gewonnen?",
    answer: "Sir Georg Solti",
    options: ["Beyoncé", "Sir Georg Solti", "Pierre Boulez", "Jay-Z"]
  },
  {
    question: "Was ist der beliebteste Film-Soundtrack aller Zeiten?",
    answer: "Star Wars, George Lucas",
    options: [
      "Star Wars, George Lucas",
      "Der weiße Hai, Steven Spielberg",
      "Jäger des verlorenen Schatzes, Steven Spielberg",
      "Pulp Fiction, Quentin Tarantino"
    ]
  },
  {
    question: "Wann wurde Spotify gegründet?",
    answer: "23. April 2006",
    options: [
      "28. Dezember 2004",
      "1. Januar 2010",
      "23. April 2006",
      "14. September 1999"
    ]
  },
  {
    question: "Welcher Begriff hat nichts mit Musik zu tun?",
    answer: "Ringschlüssel",
    options: [
      "Violinschlüssel",
      "Notenschlüssel",
      "Bassschlüssel",
      "Ringschlüssel"
    ]
  },
  {
    question: "That's why I need a one dance, got a ______ in my hand",
    answer: "Hennessy",
    options: ["Hennessy", "Panini", "Drink", "Cell Phone"]
  },
  {
    question: "Was ist das Lieblingslied der Queen?",
    answer: "Dancing Queen - ABBA",
    options: [
      "Uptown Funk - Mark Ronson ft. Bruno Mars",
      "Yellow - Coldplay",
      "Dancing Queen - ABBA",
      "Arie der Königin der Nacht - Mozart"
    ]
  },
  {
    question: "Was war 2020 der meistgestreamte Song in Deutschland?",
    answer: "Blinding Lights - The Weeknd",
    options: [
      "Roller - Apache",
      "ROCKSTAR - Dababy, Roddy Ricch",
      "Bad Guy - Billie Eilish",
      "Blinding Lights - The Weeknd"
    ]
  },
  {
    question:
      "Welches Lied war am tag der Tech Academy Kickoffs SoSe 2021 auf Platz 1 der Spotify Top 200?",
    answer: "Montetero - Lil Nas",
    options: [
      "Peaches - Justin Bieber",
      "Montetero - Lil Nas",
      "Levitating - Dua Lipa",
      "Kiss Me More - Doja Cat"
    ]
  }
];
