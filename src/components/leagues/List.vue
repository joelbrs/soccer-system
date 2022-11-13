<template>
    <section class="leagues-container">
        <div class="leagues" v-for="league in leagues" :key="league.id">
            <div class="league">
                <h3 class="title">{{league.name}}</h3>
                <p class="abbr">{{league.abbr}}</p>
                <img :src="league.logos.light" :alt="league.slug">
                
                <router-link :to='`/table/${league.id}`'>
                    <button class="select-league" :id="league.id">Tabela</button>
                </router-link>
                <br>
            </div>
        </div>
    </section>
</template>

<script>
import Leagues from '@/mixins/Leagues'

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
    font-family: 'Noto serif', serif;
    color: white;
    font-weight: bold;
    
    padding: 8px 45px;
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
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;

    max-width: 1000px;

}

.leagues {
    animation: fadeIn .8s forwards;

    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
    
    padding: 10px;
    width: 380px;
    height: 215px;
}

.leagues:hover {
    position: relative;

    box-shadow: 0 6px 12px rgba(30, 60, 90, 0.5);

    cursor: pointer;

    z-index: 1;
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