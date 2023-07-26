<script>

export default {
  data() {
    return {
      clients: [
        {
          name: "AvantGarde",
          logo: 'src/assets/client-1-2x.png'
        },
        {
          name: "FastLane",
          logo: 'src/assets/client-2-2x.png'
        },
        {
          name: "Ron Jones",
          logo: 'src/assets/client-3-2x.png'
        },
        {
          name: "Chippy's",
          logo: 'src/assets/client-4-2x.png'
        },
        {
          name: "Bullseye",
          logo: 'src/assets/client-5-2x.png'
        },
        {
          name: "Mighty Furniture",
          logo: 'src/assets/client-6-2x.png'
        },
      ]
    }
  },
  
}
</script>

<template>
  <div class = "px-8 my-20 mx-auto">
    <div class = "grid grid-cols-6 items-center justify-center">
      <div class = "flex justify-center" v-for="client in clients" :key = "client.name">
        <img :src="client.logo" :alt="client.name">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
