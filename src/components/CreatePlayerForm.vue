<template>
  <div class="measure center w-50 mt5">
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
      class="w-20 dib"
      v-for="image in images"
      :key="image"
    >
      <img :class="getImageClasses(image)" :src="`./../pictures/${image}`" />
    </div>

    <div class="w-100">
      <p>{{ nickname }} : {{ name }} - {{ photo_url }}</p>
    </div>

    <input
      class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
      type="submit"
      value="Create"
      @click="createPlayer()"
    />
  </div>
</template>

<script>
import { useMutation } from "villus";
import { ref } from "vue";

export default {
  name: "App",
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

    const CreatePlayer = `
        mutation createPlayer($input: PlayerInput!) {
            createPlayer(input: $input) {
                id
            }
        }
    `;

    function getImageClasses(image) {
      if (image === photo_url.value) {
        return "selected";
      }

      return "";
    }

    function setImageUrl(image) {
      photo_url.value = image;
    }

    const { execute } = useMutation(CreatePlayer);

    function createPlayer() {
      const variables = {
        nickname: nickname.value,
        name: name.value,
        photo_url: photo_url.value,
      };

      execute({ input: variables }).then((result) => {
        if (result.error) {
          console.log(result.error);
          // Do something
        } else {
          console.log("nothing bad happened");
        }
      });
    }

    return {
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

<style scoped>
img {
  opacity: 40%;
}

img:hover {
  opacity: 100%;
}

.selected {
  opacity: 100%;
}
</style>
