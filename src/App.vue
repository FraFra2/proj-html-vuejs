<script>
import headerComp from './components/headerComp.vue'
import mainComp from './components/mainComp.vue'
import footerComp from './components/footerComp.vue'


export default {
  data() {
    return {
      count: 0
    }
  },
  components:{
    headerComp,
    mainComp,
    footerComp
  },
}
</script>

<template>
  <headerComp/>

  <mainComp/>

  <footerComp/>
</template>

<style scoped>

</style>
