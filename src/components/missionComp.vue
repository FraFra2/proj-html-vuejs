<script>
import dotbarComp from './dotbarComp.vue';
import buttonComp from './buttonComp.vue'
export default {
  data() {
    return {
      
    }
  },
  components:{
    dotbarComp,
    buttonComp
  }
  
}
</script>

<template>
<div class="flex py-40">
  <div class = "w-1/2">
    <img class = "rounded-r-3xl" src="src/assets/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="">
  </div>
  <div class = "w-1/2 px-16 py-16">
    
    <h2 class = "text-6xl mb-6">
      learn more about our <span class = "text-[--green-text]">missions</span>
    </h2>
    <dotbarComp/>
    <p class = "mt-6">
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
      there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
      Semantics, a large language ocean. Separated they live in Bookmarksgrove.
    </p>
    <buttonComp class = "my-16" content = "READ MORE"/>
  </div>
</div>
</template>

<style scoped>

</style>
