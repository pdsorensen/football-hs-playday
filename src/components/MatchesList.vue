<template>
  <table class="collapse ba br2 b--black-10 pv2 ph3">
    <tbody>
      <tr>
        <th class="bb pv2 ph3 tl f6 fw6 ttu">is active</th>
        <th class="bb tr f6 ttu fw6 pv2 ph3">start time</th>
        <th class="bb tr f6 ttu fw6 pv2 ph3">Actions</th>
      </tr>
      <tr v-for="match in matches" :key="match.id">
        <td class="bb pv2 ph3">{{ match.is_active }}</td>
        <td class="bb pv2 ph3">{{ match.start_time }}</td>
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
