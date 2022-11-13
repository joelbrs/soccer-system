import { api } from '@/services'

export default {

    data() {
        return {
            leagues: null,
            click: false
        }
    },

    methods: {
        getLeagues() {
            api.get(`leagues`)
            .then(r => {
                this.leagues = r.data.data;
            })
        }
    }

}