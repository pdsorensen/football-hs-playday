<template>
  <div class="covid">
    <div
      class="covid-line"
      v-for="record in covid"
      :key="record.countryInfo._id"
    >
      <span class="covid-country">{{ record.country }}</span>
      <ul>
        <li>Cases: {{ record.cases }}</li>
        <li>Recovered: {{ record.recovered }}</li>
        <li>Active: {{ record.active }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
/* eslint-disable */
async function fetchData(timeout = 2000) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(
        `https://disease.sh/v3/covid-19/countries/?yesterday=true&strict=true`
      );
      setTimeout(async () => {
        resolve(await res.json());
      }, timeout);
    } catch (err) {
      reject(err);
    }
  });
}

export default {
  name: "CovidByCountry",
  props: {
    timeout: {
      type: Number,
      default: 3000,
    },
  },
  async setup(props) {
    const data = ref(null);
    data.value = await fetchData(props.timeout);

    return {
      covid: computed(() => {
        return data.value;
      }),
    };
  },
};
</script>




