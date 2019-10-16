<template>
  <div class="quiz">
    <div>

      <h1>INCOGNITO QUIZ</h1>
    </div>
    <div>
      <h3>Instructions</h3>
      <ol>
        <li>Guess the indenity of the blurry celebrity.</li>
        <li>Win more points by correctly identifying the blurriest photo!</li>
      </ol>
    </div>

    <div>
      <button v-on:click="gamePlay">Start</button>
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
      <img v-bind:style="{filter: 'blur(' + blurryAmount + 'px)'}" src="/images/Rihanna.jpeg" alt="">
    </div>

    <div>
      <h2>Score: {{ score }} </h2>
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
      blurryAmount: 50
    };
  },
  created: function() {},
  methods: {
    gamePlay: function() {
    }
  }
};
</script>