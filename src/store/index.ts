import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isLogin: false,
      firstname: "shi",
      lastname: "changchun",
      age: 18,
    }
  },
  getters: {
    fullname: (state) => {
      return state.firstname + state.lastname
    },
  },
  actions: {
    addAge() {
      this.age++
    },
  },
})
