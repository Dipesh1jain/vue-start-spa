import {createApp,VueElement} from 'vue';
import App from './App.vue'
// importing bootstrap for css
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import $bus from './utils/Events.js'

const app= createApp(App)// with this line of cod ewe can add any property as a part of globla property which can be asscessed by any component 
app.config.globalProperties.$bus = $bus;
app.mount('#app')