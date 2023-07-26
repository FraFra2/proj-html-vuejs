<script>
import buttonComp from './buttonComp.vue';
import dotbarComp from './dotbarComp.vue';
export default {
  data() {
    return {
      cards : [
        {
          title: "Speed Optimization",
          img: '<i class="fa-solid fa-gauge-high" style="color: #3e3e3e;"></i>',
          caption: "Far far away, behind the word mountains, far from the countries Vokalia Separated"
        },
        {
          title: "Cloud Solutions",
          img: '<i class="fa-solid fa-cloud" style="color: #3e3e3e;"></i>',
          caption: "Far far away, behind the word mountains, far from the countries Vokalia Separated"
        },
        {
          title: "Website Design",
          img: '<i class="fa-solid fa-mobile-screen" style="color: #3e3e3e;"></i>',
          caption: "Far far away, behind the word mountains, far from the countries Vokalia Separated"
        },
        {
          title: "Online Marketing",
          img: '<i class="fa-solid fa-stopwatch" style="color: #3e3e3e;"></i>',
          caption: "Far far away, behind the word mountains, far from the countries Vokalia Separated"
        },
      ]
    }
  },
  components:{
    buttonComp,
    dotbarComp
  }
}
</script>

<template>
  <div 
  class = "
  flex justify-between items-center
  my-10
  px-8
  ">
  
  <div class = "w-1/3">
    <p class = "text-6xl font-bold mb-8">
      We Are Here To Make Your <span class = "text-[--green-text]">Website</span> Look More <span class = "text-[--green-text]">Elegant</span> And Stylish!
    </p>
    <dotbarComp/>
    <div>
      <buttonComp class = "mt-12" content="VIEW ALL"/>
    </div>
  </div>

  <div class = "w-2/3 ml-12 grid grid-cols-2 gap-16">
    <div class = "drop-shadow-2xl bg-white rounded-xl px-20 py-10" v-for = "card in cards">
      <div class = "text-6xl mb-8" v-html="card.img">
      </div>
      <h2 class = "text-4xl mb-4">

        {{ card.title }}

      </h2>
      {{ card.caption }}

    </div>
  </div>

  </div>
</template>

<style scoped>

</style>
