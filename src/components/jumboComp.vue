<script>
import buttonComp from './buttonComp.vue';
import dotbarComp from './dotbarComp.vue'
export default {
  data() {
    return {
      
    }
  },
  components:{
    buttonComp,
    dotbarComp
  }
  
}
</script>

<template>
  <div class = "my-div">
    <div class = "w-[50%] ml-[10%] pt-20">
      <h3 class = "tracking-widest font-bold">
        17 YEARS OF EXPERIENCE
      </h3>
      <h2 class = "font-extrabold text-6xl py-8">
        We Are a <br> Web Design
        <span class = "text-[--green-text]">Agency</span>
      </h2>
      <dotbarComp/>
      <p class = "py-10 pr-10 text-gray-600">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
        Semantics, a large language ocean. Separated they live in Bookmarksgrove.
      </p>
      <buttonComp shadow content = "read more"/>


      <div class = "
    flex items-center justify-between
    text-gray-500 pb-72">
      <ul class = "flex text-sm font-extrabold">
        <li class = "transition-all hover:text-gray-700 hover:scale-110"><a href="#">FACEBOOK -&nbsp;</a></li>
        <li class = "transition-all hover:text-gray-700 hover:scale-110"><a href="#">INSTAGRAM -&nbsp;</a></li>
        <li class = "transition-all hover:text-gray-700 hover:scale-110"><a href="#">YOUTUBE -&nbsp;</a></li>
        <li class = "transition-all hover:text-gray-700 hover:scale-110"><a href="#">TWITTER</a></li>
      </ul>
      <ul
      class = "
      flex
      p-1
      mt-24
      rounded-3xl 
      bg-gray-700">
        <li 
        class = "px-4 py-2 bg-green-500 rounded-full">
          01
        </li>
        <li 
        class = "px-4 py-2 mx-1 hover:bg-gray-600 rounded-full">
          02
        </li>
        <li 
        class = "px-4 py-2 hover:bg-gray-600 rounded-full">
          03
        </li>
      </ul>
    </div>
    </div>
  </div>

</template>

<style scoped>

.my-div{
  background-image: url(../assets/Group-36-2x.png);
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: 140% 10%;
}
h3{
  color: rgb(152,225,94);
  color: linear-gradient(90deg, rgba(152,225,94,1) 25%, rgba(3,217,164,1) 75%);

}



</style>
