<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  components:{
    
  },
  props:{
    list : Array
  }
}
</script>

<template>
  <ul class = "flex gap-x-8 uppercase">
    <li class = "hover:text-gray-400 transition-all" v-for="item in list">

      <a :href="item.link">

        {{ 
          item.name
        }}

      </a>
    </li>
  </ul>
</template>

<style scoped>

</style>
