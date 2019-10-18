<template>
  <div class="quiz">
    <div>

      <h1>Incognito Quiz</h1>
    </div>
    <div>
      <h3>Instructions:</h3>
      <ol>
        <li>Guess the identity of the blurry celebrity.</li>
        <li>Win more points by correctly identifying the blurriest photo!</li>
      </ol>
    </div>

    <div>
      <button v-on:click="startQuiz">Start</button>
    </div>
    <br>
      
    <div class="blur-buttons">
      <!-- <input type="number" v-model="blurryAmount"> -->
      <button v-on:click="blurryAmount = 50">5</button>
      <button v-on:click="blurryAmount = 40">4</button>
      <button v-on:click="blurryAmount = 30">3</button>
      <button v-on:click="blurryAmount = 20">2</button>
      <button v-on:click="blurryAmount = 10">1</button>
      <button v-on:click="blurryAmount = 0">0</button>
    </div>

    <div class="main-quiz-content-container">
      <div class="photo-container">
        <img v-bind:style="{filter: 'blur(' + blurryAmount + 'px)'}" v-bind:src="currentQuestion.imagePath" alt="">
      </div>

      <div>
        <h2>Score: {{ currentScore }} </h2>
      </div> 

      <div class="multiple-choice-container">
        <button v-on:click="selectName('A')">A. {{ currentQuestion.possibleAnswers["A"] }}</button>
        <button v-on:click="selectName('B')">B. {{ currentQuestion.possibleAnswers["B"] }}</button>        
        <button v-on:click="selectName('C')">C. {{ currentQuestion.possibleAnswers["C"] }}</button>
        <button v-on:click="selectName('D')">D. {{ currentQuestion.possibleAnswers["D"] }}</button>
        <button v-on:click="selectName('E')">E. {{ currentQuestion.possibleAnswers["E"] }}</button>
      </div>
    </div>

<!-- <div class="photo-from-rails">
      <img v-bind:src="images.photo" alt="blurry photo">
    </div> -->
    <div>   
      <button v-on:click="nextQuestion()">Next</button>
      <button v-on:click="quitQuiz()">Quit Quiz</button>
    </div>

  </div>
</template>

<style>

.photo-container img {
  width: inherit;
}

.photo-container {
  overflow: hidden;
  width: 600px;
  margin: 0 auto;
}
</style>

<script>
export default {
  data: function() {
    return {
      introStage: false,
      quizStage: false,
      resultsStage: false,
      currentPhoto: false,
      blurryAmount: 50,
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
          D: "Nicki Minaj", 
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
          D: "Rihanna", 
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
    startQuiz: function() {
      if (true) {}
    },
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
        this.currentQuestionIndex ++
        this.currentQuestion = this.quizQuestions[this.currentQuestionIndex]
        this.blurryAmount = 50

    }
  }
};
</script>