<template>
  <div class="quiz">
    <h1>Incognito Quiz</h1>
    <div>
      <h3>Instructions</h3>
      <ol>
        <li>Guess the indenity of the blurry celebrity</li>
        <li>Win more points by correctly indentifying the blurriest photo</li>
      </ol>

      <input type="number" v-model="blurryAmount">
      <button v-on:click="blurryAmount = 50">50 %</button>
      <button v-on:click="blurryAmount = 40">40 %</button>
      <button v-on:click="blurryAmount = 30">30 %</button>
      <button v-on:click="blurryAmount = 20">20 %</button>
      <button v-on:click="blurryAmount = 10">10 %</button>
      <button v-on:click="blurryAmount = 0">0 %</button>

      <div class="photo-container">
        <img v-bind:style="{filter: 'blur(' + blurryAmount + 'px)'}" src="https://www.thespruce.com/thmb/_mdepcJupW43wUwEHikYTfxwE-Q=/1333x1000/smart/filters:no_upscale()/duck-big-bill-59ef8e5068e1a2001072c89e.jpg" alt="">
      </div>
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
      blurryAmount: 0
    };
  },
  created: function() {},
  methods: {}
};
</script>