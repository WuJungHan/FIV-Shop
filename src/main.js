// main.js 進入點檔案

// 將外部套件引用
import { createApp } from 'vue';

// 將vue元件引用進來-請將node_modules資料夾的放前面 自己寫的放後面 不然會出錯
// axios
import axios from 'axios';
// VueAxios
import VueAxios from 'vue-axios';

// vue3-loading-overlay
import Loading from 'vue3-loading-overlay';
// vue3-loading-overlay
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

// vee-validate匯入主套件
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
// vee-validate匯入相關規則
import rules from '@vee-validate/rules';
// vee-validate匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n';
// vee-validate匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue';
// router
import router from './router';
// import Swiper JS
// import Swiper from 'swiper';

// vee-validate定義驗證規則
// 將全部規則rules 載出來
Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule]);
});

// vee-validate 加入本機 多國語系
configure({
  // vee-validate 載入繁體中文
  generateMessage: localize({ zh_TW: zhTW }),
  // vee-validate 調整為輸入字元立即進行驗證
  validateOnInput: true,
});
// vee-validate 設定預設語系-繁體中文
setLocale('zh_TW');

// 用const app方式
const app = createApp(App);

// vee-validate 註冊三個全域元件
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

// vue3-loading-overlay
app.component('Loading', Loading);

// 啟用
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');

// const swiper = new Swiper(...)
