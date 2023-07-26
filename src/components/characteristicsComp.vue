<script>
import buttonComp from './buttonComp.vue';
import dotbarComp from './dotbarComp.vue';
export default {
  data() {
    return {
      cards : [
        {
          title: "Speed Optimization",
          img: '<i class="fa-solid fa-gauge-high"></i>',
          caption: "Far far away, behind the word mountains, far from the countries Vokalia Separated"
        },
        {
          title: "Cloud Solutions",
          img: '<i class="fa-solid fa-cloud"></i>',
          caption: "Far far away, behind the word mountains, far from the countries Vokalia Separated"
        },
        {
          title: "Website Design",
          img: '<i class="fa-solid fa-mobile-screen"></i>',
          caption: "Far far away, behind the word mountains, far from the countries Vokalia Separated"
        },
        {
          title: "Online Marketing",
          img: '<i class="fa-solid fa-stopwatch"></i>',
          caption: "Far far away, behind the word mountains, far from the countries Vokalia Separated"
        },
      ],
      applyFilter: false
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
      <buttonComp green shadow class = "mt-12" content="VIEW ALL"/>
    </div>
  </div>

  <div class = "w-2/3 ml-12 grid grid-cols-2 gap-16">
    <div 
    class = "card drop-shadow-2xl bg-white rounded-xl px-20 py-10"
    :on-mouseenter="applyFilter = true"
    v-for = "card in cards">
      <div :class ="{'filter' : applyFilter}" class = "text-6xl mb-8" v-html="card.img">
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
i{
  color: #3e3e3e;
}
.card:hover{
  color:white;
  background: rgb(152,225,94);
  background: linear-gradient(90deg, rgba(152,225,94,1) 25%, rgba(3,217,164,1) 75%);
}
</style>
