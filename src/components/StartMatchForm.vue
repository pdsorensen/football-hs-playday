<template>
  <div class="w-100">
    <div class="mw7-ns center">
      <h1>Start match</h1>
      <form>
        <label for="name" class="f6 b db mb2">Spiller 1</label>
        <div class="w-20 dib">
          <img src="./../assets/Kasper.jpg" />
        </div>
        <div class="w-20 dib">
          <img src="./../assets/Isabel.jpg" />
        </div>
        <div class="w-20 dib">
          <img src="./../assets/Rasmus.jpg" />
        </div>
        <div class="w-20 dib">
          <img src="./../assets/Michael.jpg" />
        </div>
        <div class="w-20 dib">
          <img src="./../assets/Michael.jpg" />
        </div>

        <label for="name" class="f6 b db mb2">Spiller 2</label>
        <div class="w-20 dib">
          <img src="./../assets/Kasper.jpg" />
        </div>
        <div class="w-20 dib">
          <img src="./../assets/Isabel.jpg" />
        </div>
        <div class="w-20 dib">
          <img src="./../assets/Rasmus.jpg" />
        </div>
        <div class="w-20 dib">
          <img src="./../assets/Michael.jpg" />
        </div>
        <div class="w-20 dib">
          <img src="./../assets/Michael.jpg" />
        </div>
        <div class="w-20"></div>
        <a
          @click="startMatch"
          class="f6 link dim ba ph3 pv2 mb2 dib black bg-white"
          href="#0"
          >Begynd Kamp</a
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["matchSelected"],
  methods: {
    startMatch: function () {
      this.$emit("matchSelected");
    },
  },
};
</script>

