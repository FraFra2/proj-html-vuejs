<script>
import navbarComp from './navbarComp.vue';
import {store} from '../store.js'

export default {
  data() {
    return {
      store
    }
  },
  components:{
    navbarComp
  }
}
</script>

<template>
  <div>

  </div>
  <header 
    class = "
              container mx-auto
              flex items-center justify-between">
    
    <div>
      Logo
    </div>

    <div class = "p-8">
      <navbarComp :list = "store.navbarLinks" />
    </div>

    <div>
      Search Button
    </div>

  </header>

</template>

<style scoped>

</style>
