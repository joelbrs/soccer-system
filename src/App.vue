<template>
  <div id="app">
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import Home from '@/views/Home.vue'

export default {
  name: 'App',

  components: {
    Home,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap');

#app {
  font-family: 'Noto Serif', Helvetica, Arial;
  color: #2c3e50;

  background: url('./assets/pattern.svg');

  margin: 0px;
}

h1 {
  text-align: center;
}

img {
  max-width: 100%;

  width: 70px;
}

.container {
  max-width: 800px;

  margin: 0 auto;
  padding: 20px
}

</style>
