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
<div class="flex justify-between py-40">
  <div class = "w-[40rem] relative">

    <div class = "absolute -my-14 w-full h-full ">
      <div class = "relative w-5/6 h-5/6">

        <img class = "absolute drop-shadow-lg w-full h-full top-0 left-0 rounded-r-[2rem]" src="src/assets/busy-architect-PYVKWM4-1024x872.jpg">
        <div class = "overlay drop-shadow-lg opacity-90 absolute w-full h-full top-0 left-0 rounded-r-[2rem]">

        </div>
      </div>
    </div>

    <div class = "m-image-top bg-top ml-32 -mr-12 bg-cover h-[40%] drop-shadow-lg rounded-t-lg">

    </div>
    <div class = "m-image-bottom bg-bottom ml-20 bg-cover h-[40%] drop-shadow-lg rounded-b-lg">
      
    </div>

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
    <buttonComp green shadow class = "my-16" content = "READ MORE"/>
  </div>
</div>
</template>

<style scoped>
.m-image-bottom{
  background-image: url('src/assets/businesswoman-analysing-document-P8WSNMC-1024x820.jpg');
}
.m-image-top{
  background-image: url('src/assets/businesswoman-analysing-document-P8WSNMC-1024x820.jpg');

}

.overlay{
  background: rgb(152,225,94);
  background: linear-gradient(0deg, rgba(152,225,94,1) 25%, rgba(3,217,164,1) 75%);
}

</style>
