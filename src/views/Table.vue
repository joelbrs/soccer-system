<template>
    <div>
        <div class="container">
            <table>
                <thead>
                    <tr>
                        <th class="top classification">CLASSIFICAÇÃO</th>
                        <th class="top">P</th>
                        <th class="top">J</th>
                        <th class="top">V</th>
                        <th class="top">E</th>
                        <th class="top">D</th>
                        <th class="top">GP</th>
                        <th class="top">GC</th>
                        <th class="top">SG</th>
                    </tr>
                </thead>
                
                <tbody> 
                    <tr v-for="(standing, index) in leagueStandings" :key="standing.id">
                        <td class="rows team-name info" :class="(index < 4) ? 'g4' : '' || (leagueStandings[index + 4] == null) ? 'z4' : 'middle'">
                            <p>{{(index + 1)}}</p>
                            <img class="team-logo" :src="standing.team.logos[0].href" alt="logo"/>
                            <strong>{{standing.team.displayName}}</strong>
                        </td>       
                        <td class="rows stats-points">{{standing.stats[2].value}}</td>
                        <td class="rows stats-games-played">{{standing.stats[0].value}}</td>
                        <td class="rows stats-wins">{{standing.stats[6].value}}</td>
                        <td class="rows stats-draws">{{standing.stats[5].value}}</td>
                        <td class="rows stats-losses">{{standing.stats[1].value}}</td>
                        <td class="rows stats-goals-for">{{standing.stats[4].value}}</td>
                        <td class="rows stats-goals-agains">{{standing.stats[5].value}}</td>
                        <td class="stats-point-diff">{{standing.stats[8].value}}</td>
                    </tr>
                </tbody>
            </table>    
        </div>
    </div>
</template>
  
<script>
import LeagueStandings from '@/mixins/LeagueStandings'

export default {
      name: 'TableLeague',

      mixins: [LeagueStandings],
 
      created() {
        this.getStats(this.$route.params.league)
      }
}
</script>
  
<style scoped>
  
* {
    font-family: sans-serif, Helvetica;
    
    margin: 0px;
    padding: 0px;
}

table {
    border-collapse: collapse;

    font-size: 0.95rem;
    text-align: center;
    
    min-width: 853px;

    animation: fadeIn .8s forwards;
}

th, td {
    border: 1px solid lightgray;

    border-left: none;
    border-right: none;

    text-align: center;

    animation: fadeIn .3s forwards;
}

th {
    font-size: 0.8em;
    color: #999;
}

td {
    padding: 10px;
}

td:nth-child(2){
    background-color: #f5f5f5;
}

td:nth-child(4){
    background-color: #f5f5f5;
}

td:nth-child(6){
    background-color: #f5f5f5;
}

td:nth-child(8){
    background-color: #f5f5f5;
}
.container {
    display: block;
    align-content: center;

    max-width: 1000px;

    margin: 30px auto 0 auto;
}
.top {
    font-size: .7rem;
        
    padding: 14px 0;
}
.classification {
    text-align: left;
}
.info {
    display: flex;
    align-items: center;
    gap: 10px;
}

.ranking {
    padding-left: 0;
}

.team-logo {
    width: 25px;
}
.team-name {
    text-align: left;
    font-weight: normal;
    font-size: 1rem;
    letter-spacing: -1px;

    max-width: 100%;
}
.stats-points {
    font-weight: bold;
}

.g4 p{
    color: aqua;
}

.z4 p {
    color: red;
}

.middle p {
    color: gray;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translate3d(50px, 0, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(15px, 0, 0);
    }
}
</style>