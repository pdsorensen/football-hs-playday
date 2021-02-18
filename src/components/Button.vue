<template>
  <input
    class="b fr mt4 ph3 pv2 input-reset ba b--black bg-white grow pointer f6 dib"
    type="submit"
    :value="label"
    :disabled="disabled"
  />
</template>

<script>
export default {
  props: {
    label: String,
    disabled: Boolean,
  },
};
</script>