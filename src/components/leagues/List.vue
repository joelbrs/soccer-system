<template>
    <div>
        <div v-for="league in leagues" :key="league.id">
            <div>
                <h2>{{league.name}}</h2>
                <img :src="league.logos.light" :alt="league.slug">
                <p>{{league.abbr}}</p>
                
                <router-link :to='`/table/${league.id}`'>
                    <button class="select-league" :id="league.id" @click="getStats(league.id)">Select League</button>
                </router-link>
                
            </div>
        </div>
    </div>
</template>

<script>
import TableLeague from '@/components/leagues/Table.vue'
import LeagueStandings from '@/mixins/LeagueStandings'

export default {
    name: 'ListLeagues',

    mixins: [LeagueStandings],

    data() {
        return {
            leagues: null,
            click: false
        }
    },

    components: {
        TableLeague
    },

    methods: {
        getLeagues() {
            fetch(`https://api-football-standings.azharimm.dev/leagues`)
            .then(r => r.json())
            .then(r => {
                this.leagues = r.data;
            })
        }
    },

    created() {
        this.getLeagues();
    }
}
</script>

<style>

</style>