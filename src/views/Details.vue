<template>
    <div>
        <ul>
            <li v-for="details in leagueDetails" :key="details.id">{{details}}</li>
        </ul>
    </div>
</template>

<script>
import LeaguesDetails from '../mixins/LeaguesDetails'

export default {
    name: 'Details',

    mixins: [LeaguesDetails],

    created() {
        this.getDetails($route.params.league);
    }
}
</script>

<style>

</style>