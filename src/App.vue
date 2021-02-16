<template >
  <div @click="playSound">
    <!-- <FootballResults :red="goals_red" :white="goals_white" /> -->

    <div>
      <router-link to="/players/create">Create player</router-link>
      <router-link to="/matches/current">Current match</router-link>
    </div>

    <router-view v-slot="{ Component }">
      <!-- Use any custom transition and fallback to `fade` -->
      <!-- <transition name="fade"> -->
      <component :is="Component" />
      <!-- </transition> -->
    </router-view>
  </div>
</template>

<script>
import { useClient } from "villus";
// import { Howl } from "howler";

export default {
  name: "App",
  data: function () {
    return {
      playing: true,
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
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background: url("./assets/background.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
