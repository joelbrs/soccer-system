<template>
    <div>
        <div v-for="league in leagues" :key="league.id">
            <div>
                <h2>{{league.name}}</h2>
                <img :src="league.logos.light" :alt="league.slug">
                <p>{{league.abbr}}</p>
                
                <router-link :to='`/${league.abbr}/table`'><button class="select-league" :id="league.id">Select League</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import getStats from '@/mixins/LeagueStandings.js'

export default {
    name: 'ListLeagues',

    data() {
        return {
            leagues: null,
            id: '',
        }
    },

    mixings: [getStats],

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