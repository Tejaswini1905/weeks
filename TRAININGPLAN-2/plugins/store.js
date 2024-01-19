import { createStore } from "vuex";
export default defineNuxtPlugin((nuxtApp) => {
const moduleA ={
state: {
todos: [
{ id: 1, text: '...', done: true },
{ id: 2, text: '...', done: false },
{ id: 3, text: '...', done: true }
]
},
getters: {
doneTodos (state) {
return state.todos.filter(todo => todo.done)
},
doneTodosCount (state, getters) {
return getters.doneTodos.length
},
},
}
const moduleB={
state: {
count: 0,
name: 'Tejaswini',
},
mutations: {
increment(state) {
state.count++;
},
addSurname(state, lastName){
state.name=lastName+" "+state.name
},
},
getters: {
nameChange (state){
return state.name[3]
}
},
actions: {
increment({commit}){
commit('increment')
}
}
}
const store = createStore({
modules: {
a: moduleA,
b: moduleB
}
});
nuxtApp.provide('store', store)
}
)