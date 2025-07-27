import { createApp } from "vue";
import App from "./App.vue";
import * as echarts from 'echarts';
import 'echarts-liquidfill'
import defcharts from '../index'

createApp(App).use(defcharts).mount("#app");
