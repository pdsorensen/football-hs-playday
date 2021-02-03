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

    <div class="w-20 dib" v-for="image in images" :key="image">
      <img :src="`./../pictures/${image}`" />
    </div>

    <div class="w-100">
      <p>{{ nickname }} : {{ name }} - {{ photo_url }}</p>
    </div>
  </div>
</template>

<script>
import { useMutation } from "villus";

export default {
  name: "App",
  data: function () {
    return {
      nickname: "",
      name: "",
      photo_url: "",
      images: [
        "christian_n.jpg",
        "isabel.jpg",
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
  methods: {
    onSubmit: function () {
      console.log(this.this.execute);
      //   this.execute(this.data.variables).then((result) => {
      //     if (result.error) {
      //       console.log(result.error);
      //       // Do something
      //     } else {
      //       console.log("nothing bad happened");
      //     }
      //   });
    },
  },

  setup() {
    const CreatePlayer = `
        mutation createPlayer {
            createPlayer(
                input: {
                name: $name
                nickname: $nickname
                photo_url: $picture_url
                }
            ) {
                id
            }
        }
    `;

    const { execute } = useMutation(CreatePlayer);

    return { execute };
  },
};
</script>

