import { api } from "@/services";

export default {
    
    data() {
        return {
            leagueDetails: null,
        }
    },

    methods: {
        getDetails(id) {
            api.get(`leagues/${id}`)
            .then(r => {
                this.leagueDetails = r.data.data;
            })
        }
        
    }
}