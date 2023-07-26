<script>
import dotbarComp from './dotbarComp.vue';
import infosocialComp from './infosocialComp.vue';
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
    dotbarComp,
    infosocialComp
  }
}
</script>

<template>
    <footer class = "my-32">
      <div class = "grid grid-cols-4 gap-8 px-16">

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
          <ul class = "mt-4">
            <li class = "text-sm hover:text-gray-400 py-1" v-for="link in quickLinks">
              <a :href="link.ref">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h2>
            CONTACT
          </h2>
          <dotbarComp/>
          <ul class = "mt-4">
            <li class = "hover:text-gray-400 py-2">
              Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051
            </li>
            <li class = "hover:text-gray-400 py-2">
              info@yourdomain.com
            </li>
            <li class = "hover:text-gray-400 py-2">
              +99 (0) 101 0000 888
            </li>
          </ul>
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
    <infosocialComp shaded class = "py-8" firstContent = "&#169; 2020 PHLONX BUSINESS TEAM"/>
</template>

<style scoped>
h2{
  font-weight: bold;
}
</style>
