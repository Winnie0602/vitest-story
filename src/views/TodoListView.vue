<script setup lang="ts">
import TodoCard from '../components/TodoCard.vue'
import { ref } from 'vue'

const inputTodo = ref<string>('')

const todoArr = ref<string[]>([])

const completedArr = ref<string[]>([])

const addHandler = () => {
  todoArr.value.push(inputTodo.value)
  inputTodo.value = ''
}

const completeHandler = (todo: string) => {
  const targetIndex = todoArr.value.indexOf(todo)
  todoArr.value.splice(targetIndex, 1)
  completedArr.value.push(todo)
}
</script>

<template>
  <div class="container m-5">
    <!-- 代辦清單 -->
    <h1>Todo List</h1>
    <input
      class="my-3"
      type="text"
      v-model="inputTodo"
      placeholder="請輸入代辦事項"
      name=""
      id=""
    />
    <button @click="addHandler" type="button" class="ml-2 btn btn-primary">新增</button>
    <hr class="my-5" />
    <TodoCard
      type="todo"
      v-for="todo in todoArr"
      :key="todo"
      :todo="todo"
      @completeHandler="completeHandler(todo)"
    ></TodoCard>

    <!-- 完成清單 -->
    <h1>Completed List</h1>
    <TodoCard type="completed" v-for="todo in completedArr" :key="todo" :todo="todo"></TodoCard>
  </div>
</template>

<style></style>
