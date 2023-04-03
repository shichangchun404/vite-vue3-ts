<script setup lang="ts">
import { ref } from "vue"
import { useUserStore } from "@/store"

const store = useUserStore()
defineProps<{ msg: string }>()

const changeName = () => {
  store.firstname = "施"
}
const changeName2 = () => {
  store.$patch({
    firstname: "SHI",
  })
}
const changeName3 = () => {
  store.$patch((state) => {
    state.firstname += "X"
  })
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="changeName">changeName</button>
    <button type="button" @click="changeName2">changeName2</button>
    <button type="button" @click="changeName3">changeName3</button>
  </div>
</template>

<style scoped lang="less">
.card {
  button {
    color: #888;
  }
}
</style>
