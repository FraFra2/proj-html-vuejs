<script>
import { store } from '../store.js' 
export default {
  data() {
    return {
      store
    }
  },
  props:{
    firstContent : String,
    shaded: Boolean
  }
}
</script>

<template>
  <div :class = "{'shaded' : shaded}" class = "
  flex justify-between items-center
  bg-[--gray-bg]
  text-gray-300
  py-2
  px-32
  ">
    <div>{{firstContent}}</div>
    <div>
      <ul class = "flex gap-4">
        <li v-for="social in store.socials" :key = "social.name">
          <span v-html="social.icon">
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.shaded{
  background: rgb(51,51,51);
  background: linear-gradient(90deg, rgba(51,51,51,1) 25%, rgba(32,32,32,1) 75%);
}
</style>
