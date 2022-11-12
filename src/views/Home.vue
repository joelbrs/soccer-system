<template>
  <div>
    <h1>Consultor de Ligas Futebolísicas</h1>
    <SearchLeagues/>
    <ListLeagues/>
  </div>
</template>

<script>
import SearchLeagues from '@/components/leagues/Search'
import ListLeagues from '@/components/leagues/List'

export default {
    name: 'Home',

    data() {
      return {

      }
    },

    components: {
      SearchLeagues,
      ListLeagues
    }
}
</script>

<style>

</style>