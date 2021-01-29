<template >
  <div @click="playSound">
    <transition name="fade" mode="out-in">
      <div v-if="!playing">
        <StartMatchForm @matchSelected="initiateMatch" class="w-50 dib" />
      </div>
      <div v-else class="w-80 center">
        <FootballResults :red="goals_red" :white="goals_white" />
        <!-- <div>
          <div class="w-60 mt5 fl">Running Score</div>
          <div class="w-40 mt5 fl">Running Score</div>
        </div> -->
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
import { useClient, useQuery } from "villus";
const signalR = require("@microsoft/signalr");
// import { Howl } from "howler";

import FootballResults from "./components/FootballResults.vue";
import StartMatchForm from "./components/StartMatchForm.vue";

export default {
  name: "App",
  components: {
    FootballResults,
    StartMatchForm,
  },
  data: function () {
    return {
      playing: true,
    };
  },
  methods: {
    initiateMatch: function () {
      this.playing = true;
    },
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
    const goals_red = ref(0);
    const goals_white = ref(0);

    // signalr
    let connection = connect();

    connection.on("updated", (goal) => {
      console.log(goal);
      if (goal.teamId == "White") {
        goals_white.value++;
      }

      if (goal.teamId == "Red") {
        goals_red.value++;
      }
    });

    // fetch initial goals
    useClient({
      url: "https://hs-fusball-iot-project.azurewebsites.net/api/gql-api",
    });

    const getGoals = `
      query {
        getGoals {
          teamId
          created_on
        }
      }
    `;

    const { data } = useQuery({
      query: getGoals,
    });

    return { data, goals_red, goals_white };
  },
};

const connect = () => {
  const connectionUrl = "https://hs-fusball-iot-project.azurewebsites.net";

  const connection = new signalR.HubConnectionBuilder()
    .withUrl(`${connectionUrl}/api`)
    .build();

  connection.onclose(() => {
    console.log("SignalR connection disconnected");
    setTimeout(() => this.connect(), 2000);
  });

  connection.start().then(() => {
    console.log("SignalR connection established");
  });

  return connection;
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
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
