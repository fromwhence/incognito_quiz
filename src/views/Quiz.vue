<template>
  <div class="quiz">
    <div class="left-column">
      <div class="quiz-name">
        <h1>Incognito Quiz</h1>
      </div>
      <div class="instructions">
        <div>
          <h3>Instructions:</h3>
        </div>
        <div>
          <ol>
            <li>Guess the indenity of the blurry celebrity.</li>
            <li>Win more points by correctly identifying the blurriest photo!</li>
          </ol>
        </div>
      </div>
      <br>
      <div class="photo-container">
        <img v-bind:style="{filter: 'blur(' + blurryAmount + 'px)'}" v-bind:src="currentQuestion.imagePath" alt="">
      </div>
    </div>

    <div class="right-column">
      <div class="current-score">
         <h2><span class="badge badge-dark">Score: {{ currentScore }} </span></h2>
      </div>

      <div class="blur-buttons">
        <button type="button" class="btn btn-outline-dark" v-bind:class="{ 'complete-level': blurryAmount <= 40 }">4</button>
        <button type="button" class="btn btn-outline-dark" v-bind:class="{ 'complete-level': blurryAmount <= 30 }">3</button>
        <button type="button" class="btn btn-outline-dark" v-bind:class="{ 'complete-level': blurryAmount <= 20 }">2</button>
        <button type="button" class="btn btn-outline-dark" v-bind:class="{ 'complete-level': blurryAmount <= 10 }">1</button>
        <button type="button" class="btn btn-outline-dark" v-bind:class="{ 'complete-level': blurryAmount <= 0 }">0</button>
      </div>
 
      <div class="multiple-choice-container">
        <button type="button" class="btn btn-outline-secondary" v-on:click="selectName('A')">A. {{ currentQuestion.possibleAnswers["A"] }}</button>
        <button type="button" class="btn btn-outline-secondary" v-on:click="selectName('B')">B. {{ currentQuestion.possibleAnswers["B"] }}</button>       
        <button type="button" class="btn btn-outline-secondary" v-on:click="selectName('C')">C. {{ currentQuestion.possibleAnswers["C"] }}</button>
        <button type="button" class="btn btn-outline-secondary" v-on:click="selectName('D')">D. {{ currentQuestion.possibleAnswers["D"] }}</button>
        <button type="button" class="btn btn-outline-secondary" v-on:click="selectName('E')">E. {{ currentQuestion.possibleAnswers["E"] }}</button>
        <br>
      </div>

      <div class="next-quit-buttons">   
        <button type="button" class="btn btn-outline-secondary" v-on:click="nextQuestion()">Next</button>
        <button type="button" class="btn btn-outline-secondary" v-on:click="quitQuiz()">Quit Quiz</button>
      </div>
    </div>

  </div>
</template>

<style>

.left-column {
  float: left;
  width: 50%;
  margin-top: 15px;
  padding-top: 25px;
  padding-right: 0px;
}

.right-column {
  float: left;
  padding-top: 178px;
  padding-left: 105px;
}

.quiz-name {
  float: right;
  padding-right: 185px;
  margin-bottom: 10px;
}

.instructions {
  float: right;
  margin-bottom: 10px;
}

.instructions h3 {
  float: right;
  font-size: 30px;
  padding-right: 425px;
  color: #ff0202;
}

.instructions ol {
  font-size: 22px;
  list-style-type: none;
  padding-left: 15px;
  float: right;
}

.photo-container img {
  width: inherit; 
  padding: 10px;
}

.photo-container {
  overflow: hidden;
  width: 600px;
  float: right;
/*  margin: 0 auto;*/
}

.blur-buttons button {
  width: 70px;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 30px;
}

.complete-level {
  background-color: #6c757d;
  color: white;
}

.multiple-choice-container button {
  width: 350px;
  display: block;
  font-size: 24px;
  padding: 14px 30px;
}

.current-score h2 span {
  font-size: 36px;
  padding: 15px;
  width: 170px;
  margin-left: 180px;
  margin-bottom: 5px;
}

.next-quit-buttons {
  margin-left: 30px;
  margin-top: 10px;
}

.next-quit-buttons button {
  font-size: 22px;
  width: 130px;
  height: 65px;
  padding: 15px;
  margin: 7px;
}


</style>

<script>
export default {
  data: function() {
    return {
      // startQuiz: false,
      quizStage: false,
      resultsStage: false,
      currentPhoto: false,
      blurryAmount: 40,
      activeColor: 'red',
      quizName: {},
      currentScore: 0,
      image: "",
      currentQuestionIndex: 0,
      currentQuestion: {
        celebrity: "",
        imagePath: "",
        possibleAnswers: {
          A: "",
          B: "",
          C: "", 
          D: "", 
          E: ""
        },
        correctAnswer: ''
      },
      quizQuestions:[
      {
        celebrity: "Jason Momoa",
        imagePath: "/images/JasonMomoa.jpg",
        possibleAnswers: {
          A: "Roman Reigns",
          B: "Jack Matthews",
          C: "Jason Momoa", 
          D: "Russell Brand", 
          E: "Keanu Reeves"
        },
        correctAnswer: 'C'
      },
      {
        celebrity: "Jennifer Lawrence",
        imagePath: "/images/JenniferLawrence.jpg",
        possibleAnswers: {
          A: "Haley Bennett",
          B: "Taylor Swift",
          C: "Lady Gaga", 
          D: "Shailene Woodley", 
          E: "Jennifer Lawrence"
        },
        correctAnswer: 'E'
      },
      {
        celebrity: "Nicki Minaj",
        imagePath: "/images/NickiMinaj.jpg",
        possibleAnswers: {
          A: "Cardi B",
          B: "Nicki Minaj",
          C: "Raven Symone", 
          D: "Lil' Kim", 
          E: "Zendaya Coleman"
        },
        correctAnswer: 'B'
      },
      {
        celebrity: "Robert Downey Jr.",
        imagePath: "/images/RobertDowneyJr.jpg",
        possibleAnswers: {
          A: "Hugh Jackman",
          B: "Omar Metwally",
          C: "Robert Downey Jr.", 
          D: "Johnny Depp", 
          E: "Jeffery Dean Morgan"
        },
        correctAnswer: 'C'
      },
      {
        celebrity: "Daniel Radcliffe",
        imagePath: "/images/DanielRadcliffe.jpg",
        possibleAnswers: {
          A: "Elijah Wood",
          B: "Daniel Radcliffe",
          C: "Liam Hemsworth", 
          D: "Tobey Maguire", 
          E: "Justin Timberlake"
        },
        correctAnswer: 'B'
      },
      {
        celebrity: "Rihanna",
        imagePath: "/images/Rihanna.jpeg",
        possibleAnswers: {
          A: "Rihanna",
          B: "Megan Fox",
          C: "Cardi B", 
          D: "Zoe Saldana", 
          E: "Camila Cabello"
        },
        correctAnswer: 'A'
      },
      {
        celebrity: "Johnny Depp",
        imagePath: "/images/JohnnyDepp.jpg",
        possibleAnswers: {
          A: "Tyler Blackburn",
          B: "Skeet Ulrich",
          C: "John Mayer", 
          D: "Johnny Depp", 
          E: "Robert Pattinson"
        },
        correctAnswer: 'D'
      }
    ],
    }
  },
  created: function() {
    this.currentQuestion = this.quizQuestions[this.currentQuestionIndex];

  },
  methods: {
    // startQuiz: function() {
    //   this.currentQuestion = this.currentQuestionIndex[0];
    //   this.blurryAmount = 50;
    // },
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.image = event.target.files[0];
      }
    },
    selectName: function(option) {
      if (option === this.currentQuestion.correctAnswer) {
        this.currentScore += this.blurryAmount / 10;
        this.blurryAmount = 0;
      } else {
        this.blurryAmount -= 10;
      }
    },
    nextQuestion: function() {
      this.currentQuestionIndex ++;
      this.currentQuestion = this.quizQuestions[this.currentQuestionIndex];
      this.blurryAmount = 50;
    },
    quitQuiz: function() {
      this.currentQuestionIndex = 0 ;
      this.currentQuestion = this.quizQuestions[this.currentQuestionIndex];
      this.blurryAmount = 40;
      this.currentScore = 0;
    }
  }
};
</script>