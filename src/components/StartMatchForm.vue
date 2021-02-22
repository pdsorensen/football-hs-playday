<template>
  <div class="w-100">
    <div class="mw7-ns center">
      <div class="w-100 fl">
        <h1>Choose players</h1>
        <label class="f6 b db mb2">Team white</label>
        <div
          @click="togglePlayer(player, 'white')"
          v-for="player in players"
          :key="player.id"
          :class="imageClasses(player, 'white')"
        >
          <img :src="`./../pictures/${player.photo_url}`" />
        </div>
        <label class="f6 b db mb2">Team Red</label>
        <div
          @click="togglePlayer(player, 'red')"
          v-for="player in players"
          :key="player.id"
          :class="imageClasses(player, 'red')"
        >
          <img :src="`./../pictures/${player.photo_url}`" />
        </div>

        <div class="w-80">
          <Button
            :label="'Start match'"
            :disabled="!canSubmit()"
            @click="startMatch"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import usePlayers from "./../hooks/usePlayers";
import useFormUtilities from "./../hooks/useFormUtilities";
import useMatches from "./../hooks/useMatches";
import Button from "./Button";

export default {
  components: {
    Button,
  },
  async setup() {
    const { players } = usePlayers();
    const { getImageClasses } = useFormUtilities();
    const { createMatchAndRedirect } = useMatches();

    const teams = reactive({
      white: [],
      red: [],
    });

    const togglePlayer = (player, team) => {
      let exists = existInTeam(player, team);

      if (team === "white" && !exists) {
        teams.white.push(player);
      }

      if (team === "red" && !exists) {
        teams.red.push(player);
      }

      if (team === "white" && exists) {
        teams.white = teams.white.filter((item) => item.id !== player.id);
      }

      if (team === "red" && exists) {
        teams.red = teams.red.filter((item) => item.id !== player.id);
      }
    };

    const imageClasses = (player, team) => {
      let exists = existInTeam(player, team);
      return getImageClasses(exists);
    };

    const existInTeam = (player, team) => {
      let result;
      if (team === "white") {
        result = teams.white.some((item) => item.id === player.id);
      }

      if (team === "red") {
        result = teams.red.some((item) => item.id === player.id);
      }

      return result;
    };

    const startMatch = () => {
      let payload = {
        defence_white: teams.white[0].id,
        defence_red: teams.red[0].id,
      };

      // for 2v2.
      if (teams.white.length > 1) {
        payload.offence_white = teams.white[1].id;
      }

      if (teams.red.length > 1) {
        payload.offence_red = teams.red[1].id;
      }

      createMatchAndRedirect(payload);
    };

    const canSubmit = () => teams.red.length > 0 && teams.white.length > 0;

    return {
      togglePlayer,
      players,
      canSubmit,
      imageClasses,
      startMatch,
    };
  },
};
</script>

