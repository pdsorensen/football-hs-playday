<template >
  <div @click="playSound">
    <div class="w-100">
      <transition name="fade" mode="out-in">
        <img v-if="!data" src="./assets/background.png" />
        <div v-else class="bg-light-yellow">
          <FootballResults :goals="data.getGoals" class="w-50 fl" />
          <CurrentMatch class="w-50 dib bl" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { useClient, useQuery } from "villus";
// import { Howl } from "howler";

import FootballResults from "./components/FootballResults.vue";
import CurrentMatch from "./components/CurrentMatch.vue";

export default {
  name: "App",
  components: {
    FootballResults,
    CurrentMatch,
  },
  data: function () {
    return {
      show: true,
    };
  },
  methods: {
    playSound: function () {
      // var sound = new Howl({
      //   src: "./em_1992.mp3",
      //   autoplay: true,
      //   loop: true,
      //   volume: 0.5,
      // });
      // sound.play();
    },
  },

  setup() {
    useClient({
      url: "https://hs-fusball-iot-project.azurewebsites.net/api/gql-api",
    });

    const getGoals = `
      query {
        getGoals {
          id
          teamId
          created_on
        }
      }
    `;

    const { data } = useQuery({
      query: getGoals,
    });

    return { data };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
