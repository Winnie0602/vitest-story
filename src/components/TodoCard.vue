<script setup lang="ts">
import axios from 'axios'

const props = defineProps<{
  todo: string
  type: string
}>()

const emit = defineEmits(['completeHandler'])

const completeHandler = async () => {
  emit('completeHandler', props.todo)
  axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
}

// onMounted(() => {
//   axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
// })
</script>

<template>
  <div class="">
    <div
      @click="completeHandler"
      class="alert alert-info btn"
      :class="type === 'todo' ? 'alert-info' : 'alert-dark'"
      role="alert"
      data-test="btn"
    >
      {{ todo }}
    </div>
  </div>
</template>

<style scoped></style>
