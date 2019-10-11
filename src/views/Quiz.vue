<template>
  <div class="quiz">
    <div>
      <h1>Incognito Quiz</h1>
    </div>
    <div>
      <h3>Instructions</h3>
      <ol>
        <li>Guess the indenity of the blurry celebrity</li>
        <li>Win more points by correctly indentifying the blurriest photo</li>
      </ol>
    </div>

    <div>
      <button v-on:click="gamePlay">Start</button>
    </div>
      
    <div class="blur-buttons">
      <input type="number" v-model="blurryAmount">
      <button v-on:click="blurryAmount = 50">50 %</button>
      <button v-on:click="blurryAmount = 40">40 %</button>
      <button v-on:click="blurryAmount = 30">30 %</button>
      <button v-on:click="blurryAmount = 20">20 %</button>
      <button v-on:click="blurryAmount = 10">10 %</button>
      <button v-on:click="blurryAmount = 0">0 %</button>
    </div>

    <div class="photo-container">
      <img v-bind:style="{filter: 'blur(' + blurryAmount + 'px)'}" src="/images/JenniferLawrence.jpg" alt="">
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
  width: 800px;
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