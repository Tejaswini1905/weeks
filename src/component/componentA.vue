<script setup>
import {useStore} from 'vuex'
const store= useStore()
</script>

<template>
  <div>
        <button @click="store.dispatch('incrementIfOddOnRootSum')">
        From A: {{ store.state.a.count }} </button>
        {{ store.getters.doubleCount }}
  </div>
</template>
