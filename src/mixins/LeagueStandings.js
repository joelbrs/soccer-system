import { api } from "@/services";

export default {
    
    data() {
        return {
            leagueStandings: null,
            leagueInfos: null,
        }
    },

    methods: {
        getStats(id) {
            api.get(`leagues/${id}/standings`)
            .then(r => {
                this.leagueStandings = r.data.data.standings;
            })
        },

        getLeagueInfos(id) {
            api.get(`leagues/${id}/standings`)
            .then(r => {
                this.leagueInfos = r.data.data;
            })
        }
    }
}