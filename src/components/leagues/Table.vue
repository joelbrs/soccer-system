<template>
    <div>
        <h1>Tabela</h1>
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
                        <div>
                            <td class="ranking">{{(index + 1)}}</td>
                            <td class="rows team-name"><strong>{{standing.team.name}}</strong></td>
                        </div>         
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

      data() {
        return {
            click: false,
        }
      },
  
      mixins: [LeagueStandings],
 
      created() {
        this.getStats(this.$route.params.league)
      }
}
</script>
  
<style scoped>
  
* {
    font-family: opensans, Helvetica;
    
    margin: 0px;
    padding: 0px;
}

h1 {
    display: flex;
    justify-content: start;

    margin-left: 265px;
}

table {
    border-collapse: collapse;

    font-size: 0.95rem;
    text-align: center;
    
    margin-left: 50px;
    
    min-width: 853px;
}

th, td {
    border: 1px solid lightgray;

    border-left: none;
    border-right: none;

    text-align: center;
}

th {
    font-size: 0.8em;
    color: #999;
}

td {
    padding: 12px;
}

td:nth-child(3){
    background-color: rgb(230, 240, 220);
}

td:nth-child(5){
    background-color: rgb(230, 240, 220);
}

td:nth-child(7){
    background-color: rgb(230, 240, 220);
}

td:nth-child(9){
    background-color: rgb(230, 240, 220);
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 100%;

}
.top {
    font-size: 10px;
        
    padding: 12px 0;
}
.classification {
    text-align: left;
}
.ranking {
    padding-left: 0;

    color: #999;
}
.team-name {

    text-align: left;
    font-weight: normal;
    font-size: 1rem;
    letter-spacing: -1px;

    width: 100%;

    padding-left: 0px;
    margin-right: 70px;
}
.stats-points {
    font-weight: bold;
}

</style>