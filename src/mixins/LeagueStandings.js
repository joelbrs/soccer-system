export default {
    
    data() {
        return {
            leagueStandings: null
        }
    },

    methods: {
        getStats(id) {
            fetch(`https://api-football-standings.azharimm.dev/leagues/${id}/standings`)
            .then(r => r.json())
            .then(r => {
                this.leagueStandings = r.data.standings[2].name;
            })
        }
    },
}