<!-----<script setup>
defineProps({
    greetingMessage: String
  })
</script>
<template>
    <span>{{ greetingMessage }}</span>
</template>---->


<script setup>
import {ref} from 'vue'
const num=ref(1)
const emit = defineEmits( ["increaser"])
</script>

<template>
<button @click="emit('increaser', num)">add</button>
<div>
    <slot></slot>

<div>
    <slot></slot>
</div> </div>   
</template>