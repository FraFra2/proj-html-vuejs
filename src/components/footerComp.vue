<script>
import dotbarComp from './dotbarComp.vue';
export default {
  data() {
    return {
      quickLinks :[
        {
          label: "Careers",
          ref: "#"
        },
        {
          label: "News",
          ref: "#"
        },
        {
          label: "Terms of use",
          ref: "#"
        },
        {
          label: "Privacy Projects",
          ref: "#"
        },
        {
          label: "About",
          ref: "#"
        },
        {
          label: "Contact",
          ref: "#"
        },
      ] 
    }
  },
  components:{
    dotbarComp
  }
}
</script>

<template>
    <footer class = "mt-32">
      <div class = "grid grid-cols-4 px-16">
        <div>
          <img src="src/assets/cropped-Group-39-2x.png">
          <p class = "text-sm py-8">
            While the lovely valley teems with vapour around me, and the meridian sun strikes
            the upper surfaces of the imprenetrable foliage of my trees. While the lovely
            valleys teems with vapour around me.
          </p>
        </div>
        <div>
          <h2>
            QUICK LINKS
          </h2>
          <dotbarComp/>
        </div>
        <div>
          <h2>
            CONTACT
          </h2>
          <dotbarComp/>
        </div>
        <div>
          <h2>
            LOCATION ON MAP
          </h2>
          <dotbarComp/>
          <img class = "py-4" src="src/assets/map.png">
        </div>
      </div>
    </footer>
</template>

<style scoped>
h2{
  font-weight: bold;
}
</style>
