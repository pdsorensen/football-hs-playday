<template>
  <div>
    <h1 class="center">Goals:</h1>

    <div class="w-40">
      <div v-for="goal in sortedGoals" :key="goal.id">
        {{ goal.teamId }} : {{ goal.created_on }}
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Results",
  props: {
    goals: Array[Object],
  },
  methods: {
    formatDate(date) {
      return moment(date).format("MMM DD HH:mm");
    },
  },
  computed: {
    sortedGoals() {
      let formatted = this.goals
        .map((goal) => {
          return {
            ...goal,
            created_on: moment(goal.created_on).format("MMM DD HH:mm"),
          };
        })
        .sort((a, b) => moment(b.created_on) - moment(a.created_on));

      return formatted;
    },
  },
};
</script>

