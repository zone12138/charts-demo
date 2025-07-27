<template>
  <div class="container">
    <div v-for="it in typeArr" :key="it" :class="configs[it].theme">
      <DFCharts
        :type="it"
        ref="chart"
        class="chart"
        :dataset="dataset"
        :colorList="color"
      ></DFCharts>
      <span>{{ configs[it].desc }}</span>
    </div>
  </div>
</template>

<script>
import defaultConfig from "../config/index.js";
export default {
  name: "App",
  data() {
    return {
      configs: defaultConfig,
      // typeArr: ['b_mult_gap--d--test'],
      // typeArr: ["lf_com3--l"],
      typeArr: ['b_sgl_prog--l'],
      dataset: null,
      color: null,
    };
  },
  mounted() {
    // this.typeArr = Object.keys(this.configs);
    this.color = ["#ff00ff"];
    // this.dataset = [0.5, 0.5, 0.5];
  },
  methods: {
    commonMethod() {},
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  overflow: hidden;
}

.container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  justify-items: center;
  overflow: auto;
}

.dark .chart {
  background-color: #000;
}

.chart {
  height: 30vh;
  width: 30vw;
}
</style>
