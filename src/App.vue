<template>
  <div id="app">
    <div id="nav">
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
  color: #efe1e1;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #efe1e1;
}

#nav a.router-link-exact-active {
  color: ##efe1e1;
}

h1 {
  font-size: 90px;
  font-style: normal;
  font-family: Optima,Segoe,Segoe UI,Candara,Calibri,Arial,sans-serif;
  font-weight: bold;
}

h3 {

  font-size: 30px;
  color: #ff0202;
}

body {
  font-family: "Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif;
  
}

button{
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0,0,0,0.25);
  border-radius: 5rem;
  margin: 0 0.25rem;
  
  transition:0.3s;
}
</style>
