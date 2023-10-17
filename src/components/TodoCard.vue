<script setup lang="ts">
import axios from 'axios'

const props = defineProps<{
  todo: string
  type: string
}>()

const emit = defineEmits(['completeHandler'])

const completeHandler = async () => {
  emit('completeHandler', props.todo)

  // 測試功能練習用
  axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
}
</script>

<template>
  <div class="">
    <div
      @click="completeHandler"
      class="alert"
      :class="type === 'todo' ? 'alert-primary' : 'alert-dark'"
      role="alert"
    >
      {{ todo }}
    </div>
  </div>
</template>

<style scoped></style>
