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
                        <div>
                            <td class="ranking" :class="(index < 4) ? 'g4' : '' || (leagueStandings[index + 4] == null) ? 'z4' : 'middle'">{{(index + 1)}}</td>
                            <td class="rows team-name"><strong>{{standing.team.displayName}}</strong></td>
                        </div>         
                        <td class="rows stats-points">{{standing.stats[2].value}}</td>
                        <td class="rows stats-games-played">{{standing.stats[0].value}}</td>
                        <td class="rows stats-wins">{{standing.stats[6].value}}</td>
                        <td class="rows stats-draws">{{standing.stats[5].value}}</td>
                        <td class="rows stats-losses">{{standing.stats[1].value}}</td>
                        <td class="rows stats-goals-for">{{standing.stats[4].value}}</td>
                        <td class="rows stats-goals-agains">{{standing.stats[5].value}}</td>
                        <td class="stats-point-diff">{{standing.stats[8].value}}</td>
                        
                        {{standing.length}}
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

      data() {
        return {
            aux: ''
        }
      },

      methods: {
        find(index) {
            if (index < 4) {
                this.aux = 'g4'
            }

            if (index + 4 == undefined) {
               this. aux = 'z4'
            } 

            console.log("VASCO")
        }
      },
 
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

table {
    border-collapse: collapse;

    font-size: 0.95rem;
    text-align: center;
    
    margin-left: 50px;
    
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
    padding: 15px;
}

td:nth-child(3){
    background-color: #f5f5f5;
}

td:nth-child(5){
    background-color: #f5f5f5;
}

td:nth-child(7){
    background-color: #f5f5f5;
}

td:nth-child(9){
    background-color: #f5f5f5;
}
.container {
    display: flex;
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
.ranking {
    padding-left: 0;
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

.g4 {
    color: blue;
}

.z4 {
    color: red;
}

.middle {
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