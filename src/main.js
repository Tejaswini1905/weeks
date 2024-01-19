// import { createApp } from 'vue'
// import {createStore} from 'vuex'
// import App from './App.vue'
// const moduleA =({
// state :{
// count:2,
// count2:4,
// },
// mutations: {increment (state) {
// // `state` is the local module state

// state.count++
// }},
// actions: { incrementIfOddOnRootSum ({ state, commit }) {
// if (state.count % 2 == 0) {
// commit('increment')
// }
// } },
// getters: { doubleCount(state) {
// return state.count2 * 2
// }
// },
// })
// const store = createStore({
// modules: {
//     a: moduleA}})
// const app = createApp(App)
// app.use(store)
// app.mount('#app')



// import Vue from 'vue';
// import App from './App.vue';
// import VueRouter from 'vue-router';

// Vue.config.productionTip = false;

// Vue.use(VueRouter);

// const router = new VueRouter({
//   mode: 'history',
//   routes: [],
// });

// new Vue({
//   render: (h) => h(App),
//   router,
// }).$mount('#app');


import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
