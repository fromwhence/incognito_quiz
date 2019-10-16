<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

/*#nav a.router-link-exact-active {
  color: #0a0909;
}*/

body {
  font-family: "Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif;
  /*background-image: url('/images/background_image.jpeg');*/
}

/*button{
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0,0,0,0.25);
  border-radius: 5rem;
  margin: 0 0.25rem;
  
  transition:0.3s;
}*/
</style>
