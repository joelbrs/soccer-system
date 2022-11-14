<template>
  <section>
    <h1>Consultor de Ligas Futebolísticas ⚽</h1>
    <div class="container">
      <ListLeagues/>
    </div>
  </section>
</template>

<script>
import ListLeagues from '@/components/leagues/List.vue'

export default {
    name: 'Home',

    components: {
      ListLeagues,
    }
}
</script>

<style scoped>

h1 {
  animation: fadeIn .8s forwards;

  margin: 30px 0 45px 55px;
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