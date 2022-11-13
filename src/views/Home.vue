<template>
  <section>
    <h1>Consultor de Ligas Futebolísicas</h1>

    <SelectLeagues/>
    <ListLeagues/>
    </section>
</template>

<script>
import SelectLeagues from '@/components/leagues/Select.vue'
import ListLeagues from '@/components/leagues/List.vue'
import TableLeague from '@/views/Table.vue'

export default {
    name: 'Home',

    components: {
      SelectLeagues,
      ListLeagues,
      TableLeague
    }
}
</script>

<style>

</style>