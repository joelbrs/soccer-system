import { api } from "@/services";

export default {
    
    data() {
        return {
            leagueStandings: null,
        }
    },

    methods: {
        getStats(id) {
            api.get(`leagues/${id}/standings`)
            .then(r => {
                this.leagueStandings = r.data.data.standings;
            })
        }
        
    }
}