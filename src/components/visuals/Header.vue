<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/"><img src="@/assets/logo.png" alt=""></router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>

nav {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 15px 20px;

  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);

  animation: fadeIn .3s forwards;
}

.logo {
  max-width: 30px;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translate3d(50px, 0, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(15px, 0, 0);
    }
}

</style>