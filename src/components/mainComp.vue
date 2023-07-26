<script>
import buttonComp from './buttonComp.vue';
import dotbarComp from './dotbarComp.vue';

import jumboComp from './jumboComp.vue';
import characteristicsComp from './characteristicsComp.vue';
import missionComp from './missionComp.vue';
import projectsComp from './projectsComp.vue';
import testimonialComp from './testimonialComp.vue';
import blogComp from './blogComp.vue';
import contactsComp from './contactsComp.vue';

export default {

  data() {
    return {
    }
  },
  components:{
    buttonComp,
    dotbarComp,
    jumboComp,
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
    <jumboComp/>
    <characteristicsComp/>
    <missionComp/>
    <projectsComp/>
    <testimonialComp/>
    <blogComp/>
    <contactsComp/>
  </main>
</template>

<style scoped>
</style>
