<template>
  <section>
    <h1>Consultor de Ligas Futebolísticas</h1>
    <div class="container">
      <ListLeagues/>
    </div>
  </section>
</template>

<script>
import ListLeagues from '@/components/leagues/List.vue'
import TableLeague from '@/views/Table.vue'

export default {
    name: 'Home',

    components: {
      ListLeagues,
      TableLeague
    }
}
</script>

<style scoped>

h1 {
  animation: fadeIn .8s forwards;
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