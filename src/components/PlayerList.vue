<template>
  <table class="collapse ba br2 b--black-10 pv2 ph3">
    <tbody>
      <tr>
        <th class="bb pv2 ph3 tl f6 fw6 ttu">Name</th>
        <th class="bb pv2 ph3 tl f6 fw6 ttu">Nickname</th>
        <th class="bb tr f6 ttu fw6 pv2 ph3">Rating</th>
        <th class="bb tr f6 ttu fw6 pv2 ph3">Image</th>
        <th class="bb tr f6 ttu fw6 pv2 ph3 fl">Created</th>
      </tr>
      <tr v-for="player in players" :key="player.id">
        <td class="bb pv2 ph3">{{ player.name }}</td>
        <td class="bb pv2 ph3">{{ player.nickname }}</td>
        <td class="bb pv2 ph3">?</td>
        <td class="bb pv2 ph3">{{ formatDate(player.created_on) }}</td>
        <td class="bb pv2 ph3">
          <img :src="`./../pictures/${player.photo_url}`" />
        </td>
        <td @click="deletePlayer(player.id)" class="pv2 ph3 dim">Delete</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import moment from "moment";
import usePlayers from "./../hooks/usePlayers";

export default {
  name: "App",
  props: {
    players: Array,
  },
  setup() {
    const { deletePlayer } = usePlayers();
    const formatDate = (date) => moment(date).format("MMM DD HH:mm");

    return { deletePlayer, formatDate };
  },
};
</script>
