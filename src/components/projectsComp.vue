<script>
import dotbarComp from './dotbarComp.vue';
import buttonComp from './buttonComp.vue';

export default {
  data() {
    return {
      images: [
          {
            title: "Ina-soulis",
            img: "src/assets/ina-soulis-227104-unsplash-1024x1024.jpg"
          },
          {
            title: "Ina-soulis",
            img: "src/assets/sunisa-misa-531163-unsplash-1024x1024.jpg"
          },
          {
            title: "Ina-soulis",
            img: "src/assets/355H-1024x1024.jpg"
          },
          {
            title: "Ina-soulis",
            img: "src/assets/photo-1448932252197-d19750584e56-1024x1024.jpg"
          },
          {
            title: "Ina-soulis",
            img: "src/assets/business-competition-PB366D8-1024x1024.jpg"
          },
          {
            title: "Ina-soulis",
            img: "src/assets/cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg"
          },
          {
            title: "Ina-soulis",
            img: "src/assets/aa9a4539-PQGJ7HU-1024x1024.jpg"
          },
          {
            title: "Ina-soulis",
            img: "src/assets/cody-davis-253928-unsplash-1024x1024.jpg"
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
  <div class ="flex px-8 py-16">
    <div class = "w-1/2">
      <dotbarComp/>
      <h2 class = "text-6xl py-8">
        Our recent 
        <span class = "text-[--green-text]">Web Design</span>
        & some examples of past
        <span class = "text-[--green-text]">projects</span>
      </h2>
      <dotbarComp/>
    </div>
    <div class = "w-1/2 self-end">
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
        Semantics, a large language ocean. Separated they live in Bookmarksgrove.
      </p>
    </div>
  </div>

  <div class = "grid grid-cols-4 grid-rows-2 px-2 gap-2">
    <div v-for = "img in images" class = "group">
      <img class = "
      rounded-sm 
      group-hover:scale-110" :src="img.img" :alt="img.title">
    </div>
  </div>

  <div class = "flex justify-center items-center pt-24 pb-32">
    <buttonComp green shadow content = "READ MORE"/>
  </div>
</template>

<style scoped>
</style>
