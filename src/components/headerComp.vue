<script>
import navbarComp from './navbarComp.vue';
import buttonComp from './buttonComp.vue';
import infosocialComp from './infosocialComp.vue';
import {store} from '../store.js'

export default {
  data() {
    return {
      store
    }
  },
  components:{
    navbarComp,
    buttonComp,
    infosocialComp
  }
}
</script>

<template>
  <infosocialComp firstContent = "(001) 88451234 88455438"/>
  <header 
    class = "
              container mx-auto
              flex items-center justify-between">
    
    <div>
      <img src="src/assets/cropped-Group-39-2x.png">
    </div>

    <div class = "p-8">
      <navbarComp :list = "store.navbarLinks" />
    </div>

    <div>
      <buttonComp green content = "PURCHASE"/>
      <i class="fa-solid fa-magnifying-glass fa-xl text-[--green-text] pl-4"></i>
    </div>

  </header>

</template>

<style scoped>

</style>
