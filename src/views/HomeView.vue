<template>
  <div>
    <div>firstname: {{ store.firstname }}</div>
    <div>age: {{ age }}</div>
    <HelloWorld :msg="firstname"></HelloWorld>
    <button @click="addAge">add age</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import HelloWorld from "@/components/HelloWorld.vue"
import { useUserStore } from "@/store"
import { storeToRefs } from "pinia"

const store = useUserStore()
console.log("store >>> ", store)
console.log(store.firstname)
// const firstname = store.firstname
const { firstname, age } = storeToRefs(store)
console.log("firstname >>> ", firstname)

const addAge = () => {
  store.addAge()
}
</script>

<style scoped lang="less"></style>
