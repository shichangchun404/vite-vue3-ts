<script setup lang="ts">
import { ref } from "vue"
import { useUserStore } from "@/store"

const store = useUserStore()
// 形式1
// const props = defineProps<{ msg: string }>() // 赋值给props 便于取值
// 形式2
const props = defineProps({
  msg: String,
})

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
console.log("props.msg >>> ", props.msg)
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
