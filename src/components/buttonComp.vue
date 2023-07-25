<script>

export default {
  data() {
    return {
      
    }
  },
  props:{
    content : String
  }
  
}
</script>

<template>
  <button class = "
  uppercase 
  text-white font-light
  px-12 py-3 rounded-full
  drop-shadow-xl">
    {{ content }}
  </button>
</template>

<style scoped>
  button{
    background: rgb(51,51,51);
    background: linear-gradient(90deg, rgba(51,51,51,1) 25%, rgba(32,32,32,1) 75%);
  }
</style>
