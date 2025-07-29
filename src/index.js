import charts from './dfcharts';
import '@/styles/index.css'

const install = (app) => {
  app.component(charts.name, charts);
};

export default {
  install,
};
