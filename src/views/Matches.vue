<template>
  <div>
    <MatchesList v-if="!loading" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import useMatches from "./../hooks/useMatches";
import MatchesList from "../components/MatchesList";

export default {
  components: {
    MatchesList,
  },
  async setup() {
    const { loading } = await useMatches();
    console.log("HM", loading);

    return { loading };
  },
};
</script>