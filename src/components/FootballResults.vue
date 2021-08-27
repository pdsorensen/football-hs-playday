<template>
  <div class="pt6">
    <div class="w-40 f1 fl center tc">
      RED
      <div class="mt6">
        <div class="w-100 fl">
          <img src="./../assets/Kasper.jpg" />
          <img src="./../assets/Mikkel.jpg" />
        </div>
        <!-- <div class="w-50 fl">
          <img src="./../assets/Isabel.jpg" />
        </div> -->
      </div>
    </div>
    <div class="w-20 fl tc mt3">
      <div class="f1">{{ red }} : {{ white }}</div>
    </div>
    <div class="w-40 f1 fl center tc">
      WHITE
      <div class="mt6">
        <div class="w-100 fl">
          <img src="./../assets/Mads.jpg" />
          <img src="./../assets/niels_jacob.jpg" />
        </div>
        <!-- <div class="w-50 fl">
          <img src="./../assets/Svend.jpg" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import moment from "moment";
import { ref } from "vue";
// const signalR = require("@microsoft/signalr");

export default {
  name: "Results",
  // props: {
  //   white: Number,
  //   red: Number,
  // },
  // methods: {
  //   formatDate(date) {
  //     return moment(date).format("MMM DD HH:mm");
  //   },
  // },
  // computed: {
  //   sortedGoals() {
  //     let formatted = this.goals
  //       .map((goal) => {
  //         return {
  //           ...goal,
  //           created_on: moment(goal.created_on).format("MMM DD HH:mm"),
  //         };
  //       })
  //       .sort((a, b) => moment(b.created_on) - moment(a.created_on));

  //     return formatted;
  //   },
  // },
  setup() {
    const red = ref(0);
    const white = ref(0);

    // signalr
    // let connection = connect();

    // connection.on("updated", (goal) => {
    //   console.log(goal);
    //   if (goal.teamId == "White") {
    //     white.value++;
    //   }

    //   if (goal.teamId == "Red") {
    //     red.value++;
    //   }
    // });

    // fetch initial goals

    return { red, white };
  },
};

// const connect = () => {
//   const connectionUrl = "https://hs-fusball-iot-project.azurewebsites.net";

//   const connection = new signalR.HubConnectionBuilder()
//     .withUrl(`${connectionUrl}/api`)
//     .build();

//   connection.onclose(() => {
//     console.log("SignalR connection disconnected");
//     setTimeout(() => this.connect(), 2000);
//   });

//   connection.start().then(() => {
//     console.log("SignalR connection established");
//   });

//   return connection;
// };
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>
