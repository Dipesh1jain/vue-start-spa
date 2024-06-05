import {createApp,VueElement} from 'vue';
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import $bus from './utils/Events.js'
import router from'./routes';

const app= createApp(App)// with this line of cod ewe can add any property as a part of globla property which can be asscessed by any component 
app.use(router);
app.config.globalProperties.$bus = $bus;
app.mount('#app')