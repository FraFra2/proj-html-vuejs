<script>

export default {
  data() {
    return {
      
    }
  },
  props:{
    content : String,
    shadow : Boolean,
    green: Boolean
  }
  
}
</script>

<template>
  <button class = "
  uppercase 
  text-white font-light
  px-12 py-3 rounded-full
  "
  :class="{'shadow' : shadow, 'green': green}">
    {{ content }}
  </button>
</template>

<style scoped>
  button{
    background: rgb(51,51,51);
    background: linear-gradient(90deg, rgba(51,51,51,1) 25%, rgba(32,32,32,1) 75%);
    transition: all .5s ease-in-out;
  }
  .green{
    background: rgb(152,225,94);
    background: linear-gradient(90deg, rgba(152,225,94,1) 25%, rgba(3,217,164,1) 75%);
  }
  .green:hover{
    background: rgb(51,51,51);
    background: linear-gradient(90deg, rgba(51,51,51,1) 25%, rgba(32,32,32,1) 75%);
  }
  .shadow{
    -webkit-box-shadow: 5px 5px 15px 5px #A7A7A7; 
    box-shadow: 5px 5px 15px 5px #A7A7A7;
  }
</style>
