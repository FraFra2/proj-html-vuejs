<script>
import dotbarComp from './dotbarComp.vue';
import buttonComp from './buttonComp.vue';

export default {
  data() {
    return {
      images: [
          {
            title: "A Basket Of Flower",
            img: "src/assets/ina-soulis-227104-unsplash-1024x1024.jpg",
          },
          {
            title: "A Famous Ferris Wheel",
            img: "src/assets/sunisa-misa-531163-unsplash-1024x1024.jpg"
          },
          {
            title: "A Pair Of Yellow Shoes",
            img: "src/assets/355H-1024x1024.jpg"
          },
          {
            title: "A Notebook",
            img: "src/assets/photo-1448932252197-d19750584e56-1024x1024.jpg"
          },
          {
            title: "Paper Boats",
            img: "src/assets/business-competition-PB366D8-1024x1024.jpg"
          },
          {
            title: "A Cozy Sofa",
            img: "src/assets/cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg"
          },
          {
            title: "Hot Baloons",
            img: "src/assets/aa9a4539-PQGJ7HU-1024x1024.jpg"
          },
          {
            title: "A Blue Orange",
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

  <div class = "grid grid-cols-4 grid-rows-2 px-8 gap-3.5">
    <div v-for = "img in images" class = "
    group relative 
    ">
      <img class = "
      rounded-md
      z-10
      group-hover:scale-110 transition-all" :src="img.img" :alt="img.title">
      <div class = "
      m-filter hidden
      rounded-md
      group-hover:inline-block group-hover:scale-110
      w-full h-full
      opacity-50
      z-10
      top-0
      absolute
      
      ">
      </div>
      <div class = "hidden
      rounded-md
      group-hover:inline-block group-hover:scale-110
      w-full h-full
      opacity-100
      z-20
      top-0
      absolute">
        <div class = "
        flex flex-col-reverse justify-start items-center
        h-full text-white font-bold
        ">
          <h3 class ="font-bold py-8">
            Marketing
          </h3>
          <h2 class = "text-2xl">
            {{ img.title }}
          </h2>
        </div>
      </div>
    </div>

  </div>





  <div class = "flex justify-center items-center pt-24 pb-32">
    <buttonComp green shadow content = "READ MORE"/>
  </div>
</template>

<style scoped>
.m-filter{
  background: rgb(152,225,94);
  background: linear-gradient(90deg, rgba(152,225,94,1) 25%, rgba(3,217,164,1) 75%);
}
</style>
