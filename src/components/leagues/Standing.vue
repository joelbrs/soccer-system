<template>
    <p v-if="leagueStandings">{{leagueStandings.name}}</p>
</template>

<script>
export default {
    name: 'StandingLeague',

    data() {
        return {
            leagueStandings: null
        }
    },

    methods: {
        getStandings(id) {
            fetch(`https://api-football-standings.azharimm.dev/leagues/${id}/standings`)
            .then(r => r.json())
            .then(r => {
                this.leagueStandings = r.data.standings[0].team;
            })
        }
    },

    created() {
        this.getStandings('aus.1')
    }
}
</script>

<style>

</style>