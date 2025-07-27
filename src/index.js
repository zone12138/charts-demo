import charts from './dfcharts';
import './index.css'

const install = (app) => {
  app.component(charts.name, charts);
};

export default {
  install,
};
