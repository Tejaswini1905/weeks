<script setup>
import {useStore} from 'vuex'
const store= useStore()
</script>

<template>
  <div>
    <button @click="store.commit('decrement')">
      From B: {{ store.state.ret }}
    </button>
  </div>
</template>