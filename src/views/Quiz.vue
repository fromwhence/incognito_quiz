<template>
  <div class="quiz">
    <div class="left-column">
      <!-- <div class="quiz-name">
        <h1>Incognito Quiz</h1>
      </div> -->
    <div class="container">
      <div class="neon">Incognito </div>
      <div class="flux">Quiz </div>
    </div>

      <br>
      <div class="photo-container">
        <img v-bind:style="{filter: 'blur(' + blurryAmount + 'px)'}" v-bind:src="currentQuestion.imagePath" alt="">
      </div>
    </div>

    <div class="right-column">
       <div class="alert alert-danger" role="alert">
        <div>
          <ol>
            <li>Guess the indenity of the blurry celebrity.</li>
            <li>Win more points by correctly identifying the blurriest photo!</li>
          </ol>
        </div>
      </div>
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

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: table;
  background-color: black;
}

@font-face {
  font-family: neon;
  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/707108/neon.ttf);
}

.container {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.neon {
  font-family: neon;
  color: #FB4264;
  font-size: 7vw;
  line-height: 9vw;
  text-shadow: 0 0 3vw #F40A35;
}

.flux {
  font-family: neon;
  color: #426DFB;
  font-size: 7vw;
  line-height: 6vw;
  text-shadow: 0 0 3vw #2356FF;
}

.neon {
  animation: neon 1s ease infinite;
  -moz-animation: neon 1s ease infinite;
  -webkit-animation: neon 1s ease infinite;
}

@keyframes neon {
  0%,
  100% {
    text-shadow: 0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914;
    color: #FED128;
  }
  50% {
    text-shadow: 0 0 .5vw #800E0B, 0 0 1.5vw #800E0B, 0 0 5vw #800E0B, 0 0 5vw #800E0B, 0 0 .2vw #800E0B, .5vw .5vw .1vw #40340A;
    color: #806914;
  }
}

.flux {
  animation: flux 2s linear infinite;
  -moz-animation: flux 2s linear infinite;
  -webkit-animation: flux 2s linear infinite;
  -o-animation: flux 2s linear infinite;
}

@keyframes flux {
  0%,
  100% {
    text-shadow: 0 0 1vw #1041FF, 0 0 3vw #1041FF, 0 0 10vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE, .5vw .5vw .1vw #147280;
    color: #28D7FE;
  }
  50% {
    text-shadow: 0 0 .5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180, 0 0 5vw #082180, 0 0 .2vw #082180, .5vw .5vw .1vw #0A3940;
    color: #146C80;
  }
}

.left-column {
  float: left;
  width: 50%;
  margin-top: 100px;
  padding-top: 25px;
  padding-left: 55px;
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
.instructions h5 {
  float: right;
  font-size: 20px;
  padding-right: 425px;
  color: #69ddf4;
}
.alert alert-danger ol {
  font-size: 15px;
  list-style-type: none;
  padding-left: 15px;
  float: right;
}
h5 {
  color: #69ddf4;
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
  color:#0fa3ff;
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
  color: #f9f2f2;
  padding: 14px 30px;
}
.current-score h2 span {
  font-size: 30px;
  padding: 15px;
  width: 170px;
  margin-left: 100px;
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
  color: #E4BD23;
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