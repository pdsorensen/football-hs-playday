  
<template>
  <div>
    <div v-if="isCreating">Creating match</div>
    <StartMatchForm v-else />
  </div>
</template>

<script>
import useMatches from "./../hooks/useMatches";
import StartMatchForm from "../components/StartMatchForm";

export default {
  components: {
    StartMatchForm,
  },
  setup() {
    const { isCreating } = useMatches();

    return {
      isCreating,
    };
  },
};
</script>