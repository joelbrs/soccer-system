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
import LeagueStandings from '@/mixins/LeagueStandings'
import Leagues from '@/mixins/Leagues'


export default {
    name: 'ListLeagues',

    mixins: [LeagueStandings, Leagues],

    created() {
        this.getLeagues();
    }
}
</script>

<style>

</style>