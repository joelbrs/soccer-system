<template>
    <div class="leagues-container">
        <div class="leagues" v-for="league in leagues" :key="league.id">
            <h3 class="league-name" title="Nome da Liga">{{league.name}}</h3>
            <p class="league-abbr" >{{league.abbr}}</p>
            <img class="league-logo" :src="league.logos.light" :alt="league.slug" title="Logo da Liga">

            <router-link :to="`/tabela/${league.id}`">
                <button class="select-league">Tabela</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import Leagues from '@/mixins/Leagues.js'

export default {
    name: 'ListLeagues',

    mixins: [Leagues],

    created() {
        this.getLeagues();
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
}

h3, p, img, button {
    margin-bottom: 10px;
}

h3, p {
    text-align: center;
}

h3 {
    margin-top: 15px;
}

p {
    color: #e80;
    font-weight: bold;
}

img, button {
    display: block;
    margin: 0 auto;
}

button {
    background-color: teal;
    
    border: none;
    border-radius: 5px;

    cursor: pointer;

    font-size: 1rem;
    color: white;
    font-weight: bold;
    
    padding: 6.5px 45px;
    margin-top: 8px;
}

button:hover {
    background-color: lightblue;
}

a {
    text-decoration: none;
}

.leagues-container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));


    margin-right: -80px;
}
.leagues {
    animation: fadeIn .8s forwards;

    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
    
    width: 380px;
    max-width: 1000px;
    height: 215px;
    margin-bottom: 20px
}

.leagues:hover {
    position: relative;

    box-shadow: 0 6px 12px rgba(30, 60, 90, 0.5);

    cursor: pointer;
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