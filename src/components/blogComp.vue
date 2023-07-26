<script>
import dotbarComp from './dotbarComp.vue'
import buttonComp from './buttonComp.vue'
export default {
  data() {
    return {
      articles: [
        {
          author: "May 24, 2018 by Alex",
          img: "src/assets/serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg",
          subject: "Marketing Ideas"
        },
        {
          author: "May 24, 2018 by Alex",
          img: "src/assets/Businessman-at-the-desk-in-his-office-resting--1024x768.jpg",
          subject: "Rest During Work Hours"
        },
        {
          author: "May 24, 2018 by Alex",
          img: "src/assets/simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg",
          subject: "Develop Your Startup Ideas"
        },
        
      ]
    }
  },
  components:{
    dotbarComp,
    buttonComp
  }
  
}
</script>

<template>
  <div class = "text-center mt-40">
    <h2 class = "text-5xl mb-8">
      Latest News & Our <span class = "text-[--green-text]">Blog</span>
    </h2>
    <dotbarComp/>

    <div class = "grid grid-cols-3 py-32 px-2 gap-6 text-left">

      <div class = "relative flex justify-center" v-for = "article in articles">
        <img class = "rounded-lg drop-shadow-lg" :src="article.img">
        <div class = "absolute mt-60">
          <div class = "
          bg-white 
          py-6 pr-24 pl-8
          rounded-xl
          drop-shadow-lg">
            <h6 class = "text-xs mb-2">
              {{ article.author }}
            </h6>
            <div class = "flex justify-center items-center">
              <i class="fa-solid fa-circle text-[0.5rem] text-[--green-text] px-2"></i> 
              <h2 class = "font-bold">
                {{ article.subject }}
              </h2>
            </div>
          </div>
        </div>
      </div>

    </div>
    <buttonComp content = "VIEW ALL POST"/>
  </div>
  

</template>

<style scoped>

</style>
