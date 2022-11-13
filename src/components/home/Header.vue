<template>
  <header>
    <nav>
      <div class="logo"><img src="@/assets/logo.png" alt=""></div>
    </nav>
  </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>

* {
  box-sizing: border-box;
  
  margin: 0;
  padding: 0;
}

header {
  animation: fadeIn .8s forwards;

  background: #9400d3;
}

nav {
  display: flex;
  align-content: space-between;

  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.logo {
  flex: 1;
  max-width: 25px;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translate3d(0, 20px, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0px, 0, 0);
    }
}

</style>