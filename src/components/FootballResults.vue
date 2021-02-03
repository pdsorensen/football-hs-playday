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

export default {
  name: "Results",
  props: {
    white: Number,
    red: Number,
  },
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
};
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>
