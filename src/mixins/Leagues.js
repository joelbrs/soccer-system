import { api } from '@/services'

export default {
    data() {
        return {
            leagues: null,
            totalLeagues: 0,
        }
    },

    methods: {
        getLeagues() {
            api.get(`leagues`)
            .then(r => {
                this.leagues = r.data.data;
            })
        }
    },
}