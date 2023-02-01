import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "../node_modules/nprogress/nprogress.css"
import"../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserPlus,faUserEdit,faTrash,faCartPlus,faShop,faQrcode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


const app = createApp(App)

library.add(faUserPlus,faUserEdit,faTrash,faCartPlus,faShop,faQrcode);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
