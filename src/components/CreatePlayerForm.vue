<template>
  <div>
    <div class="fl w-50">
      <div class="w-100">
        <label for="name" class="f6 b db mb2">Name </label>
        <input
          v-model="name"
          class="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
        />
      </div>

      <div class="w-100">
        <label for="name" class="f6 b db mb2">Nickname </label>
        <input
          v-model="nickname"
          class="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
        />
      </div>

      <div
        @click="setImageUrl(image)"
        :class="getImageClasses(image === photo_url)"
        v-for="image in images"
        :key="image"
      >
        <img :src="`./../pictures/${image}`" />
      </div>

      <div class="w-100">
        <p>{{ nickname }} : {{ name }} - {{ photo_url }}</p>
      </div>

      <input
        class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        type="submit"
        value="Create"
        @click="createPlayer({ nickname, name, photo_url })"
      />
    </div>

    <div class="w-50 fl">
      <Suspense>
        <template #default>
          <PlayerList :players="players" />
        </template>
        <template #fallback>
          <div>Loading players</div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PlayerList from "./PlayerList";
import usePlayers from "./../hooks/usePlayers";
import useFormUtilities from "./../hooks/useFormUtilities";

export default {
  name: "App",
  components: {
    PlayerList,
  },
  data: function () {
    return {
      images: [
        "christian_n.jpg",
        "isabel.png",
        "jacob_jepsen.jpg",
        "Jacob_S.jpg",
        "Kasper.jpg",
        "Mads.jpg",
        "Michael.jpg",
        "Mikkel.jpg",
        "niels_jacob.jpg",
        "Patrikk.jpeg",
        "Rasmus.jpg",
        "Simon.jpg",
        "Svend.jpg",
        "Thomas.jpg",
      ],
    };
  },
  setup() {
    let nickname = ref("");
    let name = ref("");
    let photo_url = ref("");

    const setImageUrl = (image) => (photo_url.value = image);

    const { players, createPlayer } = usePlayers();
    const { getImageClasses } = useFormUtilities();

    return {
      players,
      createPlayer,
      getImageClasses,
      setImageUrl,
      nickname,
      name,
      photo_url,
    };
  },
};
</script>
