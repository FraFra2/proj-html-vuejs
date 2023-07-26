<script>
import buttonComp from './buttonComp.vue'
import clientsComp from './clientsComp.vue';
export default {
  data() {
    return {
      
    }
  },
  components:{
    buttonComp,
    clientsComp
  }
  
}
</script>

<template>
  <div class = "px-2 mt-56 text-white">
    <div class="grid grid-cols-2 gap-x-4">
      <div class = "flex flex-col justify-center items-center p-8 rounded-xl">
        <span class = "text-sm py-4 font-extralight">Are you ready?</span>
        <h2 class = "pb-16 text-4xl">
          Start a New Project
        </h2>
        <div class = "bg-[--gray-bg] mb-8 p-3 px-6 rounded-3xl drop-shadow-xl">
          <input placeholder="Enter Your Email Address" class = "w-64 bg-transparent" type="text">
          <button class = "uppercase text-gray-400 pl-16">Submit</button>  
        </div>
      </div>


      <div class = "flex flex-col justify-center items-center p-8 rounded-xl">
        <span class = "text-sm py-4 font-extralight">What are you waiting for?</span>
        <h2 class = "pb-16 text-4xl">
          Let's talk about work
        </h2>
        <div class = "mb-8">
          <buttonComp content = "START NOW"/>
        </div>
      </div>
    </div>
  </div>

  <clientsComp/>
</template>

<style scoped>
  .grid div:first-child{
    background: rgb(51,51,51);
    background: linear-gradient(90deg, rgba(51,51,51,1) 25%, rgba(32,32,32,1) 75%);
  }
  .grid div:nth-child(2){
    background: rgb(152,225,94);
    background: linear-gradient(90deg, rgba(152,225,94,1) 25%, rgba(3,217,164,1) 75%); 
  }
</style>
