<template>
  <table class="collapse ba br2 b--black-10 pv2 ph3">
    <tbody>
      <tr>
        <th class="bb pv2 ph3 tl f6 fw6 ttu">Id</th>
        <th class="bb pv2 ph3 tl f6 fw6 ttu">State</th>
        <th class="bb tr f6 ttu fw6 pv2 ph3">Start time</th>
        <th class="bb tr f6 ttu fw6 pv2 ph3">End time</th>
        <th class="bb tr f6 ttu fw6 pv2 ph3">Red</th>
        <th class="bb tr f6 ttu fw6 pv2 ph3">White</th>
        <th class="bb tr f6 ttu fw6 pv2 ph3">Actions</th>
      </tr>
      <tr v-for="match in matches" :key="match.id">
        <td class="bb pv2 ph3">
          {{ match.is_active === true ? "Running" : "Finished" }}
        </td>
        <td class="bb pv2 ph3">{{ match.id }}</td>
        <td class="bb pv2 ph3">{{ match.start_time }}</td>
        <td class="bb pv2 ph3">{{ match.end_time }}</td>
        <td class="bb pv2 ph3">
          <div class="w-100">
            <img
              v-if="match.player_defence_red !== null"
              :src="`./../pictures/${match.player_defence_red.photo_url}`"
            />
            <img
              v-if="match.player_offence_red !== null"
              :src="`./../pictures/${match.player_offence_red.photo_url}`"
            />
          </div>

          <div class="w-100 tc fr">{{ match.final_score_red }}</div>
        </td>
        <td class="bb pv2 ph3">
          <img
            v-if="match.player_defence_white !== null"
            :src="`./../pictures/${match.player_defence_white.photo_url}`"
          />
          <img
            v-if="match.player_offence_white !== null"
            :src="`./../pictures/${match.player_offence_white.photo_url}`"
          />
          <div class="w-100 tc fr">{{ match.final_score_white }}</div>
        </td>
        <td @click="endMatch(match.id)" class="pv2 ph3 dim">Terminate</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import useMatches from "./../hooks/useMatches";

export default {
  name: "Matches",
  async setup() {
    const { matches, endMatch } = await useMatches();
    return { matches, endMatch };
  },
};
</script>

<style scoped>
img {
  max-width: 50px;
}
</style>