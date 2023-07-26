<script>
import buttonComp from './buttonComp.vue';
import dotbarComp from './dotbarComp.vue';
import characteristicsComp from './characteristicsComp.vue';
import missionComp from './missionComp.vue';
import projectsComp from './projectsComp.vue';
import testimonialComp from './testimonialComp.vue';
import blogComp from './blogComp.vue';
import contactsComp from './contactsComp.vue';

export default {

  data() {
    return {
      count: 0
    }
  },
  components:{
    buttonComp,
    dotbarComp,
    characteristicsComp,
    missionComp,
    projectsComp,
    testimonialComp,
    blogComp,
    contactsComp
}

}
</script>

<template>
  <main>
    <div class = "my-div">
      <div class = "w-[50%] ml-[10%] pt-20">
        <span class = "tracking-widest text-[--green-text]">
          17 YEARS OF EXPERIENCE
        </span>
        <h2 class = "font-extrabold text-6xl py-8">
          We Are a <br> Web Design
          <span class = "text-[--green-text]">Agency</span>
        </h2>
        <dotbarComp/>
        <p class = "py-10">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean. Separated they live in Bookmarksgrove.
        </p>
        <buttonComp shadow content = "read more"/>


        <div class = "
      flex items-center justify-between
      text-gray-500 pb-72">
        <ul class = "flex text-xs font-extrabold">
          <li><a href="#">FACEBOOK -&nbsp;</a></li>
          <li><a href="#">INSTAGRAM -&nbsp;</a></li>
          <li><a href="#">YOUTUBE -&nbsp;</a></li>
          <li><a href="#">TWITTER</a></li>
        </ul>
        <ul
        class = "
        flex
        p-1
        rounded-3xl 
        bg-gray-700 ">
          <li 
          class = "px-4 py-2 bg-green-400 rounded-full">
            01
          </li>
          <li 
          class = "px-4 py-2 mx-1 rounded-full">
            02
          </li>
          <li 
          class = "px-4 py-2 rounded-full">
            03
          </li>
        </ul>
      </div>
      </div>
      
      
      

    </div>

    <characteristicsComp/>
    <missionComp/>
    <projectsComp/>
    <testimonialComp/>
    <blogComp/>
    <contactsComp/>
  </main>
</template>

<style scoped>
    .my-div{
      background-image: url(../assets/Group-36-2x.png);
      background-size: 70%;
      background-repeat: no-repeat;
      background-position: 140% 10%;
    }
</style>
