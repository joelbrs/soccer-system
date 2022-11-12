<template>
    <div>
        <div v-for="league in leagues" :key="league.id">
            <div>
                <h2>{{league.name}}</h2>
                <img :src="league.logos.light" :alt="league.slug">
                <p>{{league.abbr}}</p>
                
                <router-link to="/standing"><button class="select-league">Select League</button></router-link>
                
            </div>
        </div>
    </div>
</template>

<script>
import StandingLeague from '@/components/leagues/Standing.vue'

export default {
    name: 'ListLeagues',

    data() {
        return {
            leagues: null,
        }
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

    components: {
        StandingLeague
    },

    created() {
        this.getLeagues();
    }
}
</script>

<style>

</style>