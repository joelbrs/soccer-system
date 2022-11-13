<template>
  <section>
    <h1>Consultor de Ligas Futebolísicas</h1>

    <SearchLeagues/>
    <ListLeagues/>
    </section>
</template>

<script>
import SearchLeagues from '@/components/leagues/Search.vue'
import ListLeagues from '@/components/leagues/List.vue'
import TableLeague from '@/components/leagues/Table.vue'

export default {
    name: 'Home',

    components: {
      SearchLeagues,
      ListLeagues,
      TableLeague
    }
}
</script>

<style>

</style>