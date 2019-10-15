<template>
  <div class="quiz">
    <div>
      <h1>Incognito Quiz</h1>
    </div>
    <div>
      <h3>Instructions:</h3>
      <ol>
        <li>Guess the indenity of the blurry celebrity.</li>
        <li>Win more points by correctly identifying the blurriest photo!</li>
      </ol>
    </div>

    <div>
      <button v-on:click="startQuiz">Start</button>
    </div>
      
    <div class="blur-buttons">
      <input type="number" v-model="blurryAmount">
      <button v-on:click="blurryAmount = 50">5</button>
      <button v-on:click="blurryAmount = 40">4</button>
      <button v-on:click="blurryAmount = 30">3</button>
      <button v-on:click="blurryAmount = 20">2</button>
      <button v-on:click="blurryAmount = 10">1</button>
      <button v-on:click="blurryAmount = 0">0</button>
    </div>

    <div class="photo-container">
      <img v-bind:style="{filter: 'blur(' + blurryAmount + 'px)'}" src="/images/JenniferLawrence.jpg" alt="">
    </div>

    <div class="multiple-choice-container">
      <button v-on:click="selectName()">A. {{ quizName }}</button>
      <button v-on:click="selectName()">B. {{ quizName }}</button>        
      <button v-on:click="selectName()">C. {{ quizName }}</button>
      <button v-on:click="selectName()">D. {{ quizName }}</button>
      <button v-on:click="selectName()">E. {{ quizName}}</button>
    </div>

<!-- <div class="photo-from-rails">
      <img v-bind:src="images.photo" alt="blurry photo">
    </div> -->

    <div>
      <h2>Score: {{ currentScore }} </h2>
    </div> 
 
    <div>
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
      image: ""

    };
  },
  created: function() {},
  methods: {
    startQuiz: function() {},
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.image = event.target.files[0];
      }
    },
    selectName: function() {
    }
  }
};
</script>