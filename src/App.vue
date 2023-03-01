<template>
  <div id="app">
     <div>
       <div>
         <button @click="Forward" >前進</button>
         <button @click="Back" >後退</button>
         <button @click="TestGo"   >前進或後退幾頁</button>


       </div>
      <div>
        <router-link  :to="{name:'A'}">About</router-link>&nbsp;
        <router-link  :to="{name:'H'}">Home</router-link>
      </div>
      <div>
        <Banner/>
      </div>
      <div>
        <router-view></router-view>
      </div>
     </div>
       
       
       
       
     
    
  </div>
</template>

<script>
import Banner from './components/Banner-Component.vue'

export default {
  name: 'App',
  components: {
    Banner
  },
  methods:{
      Forward(){
         console.log(this.$router.forward());
         this.$router.forward()
      },
      Back(){
         console.log(this.$router.forward());
         this.$router.back()
      },
      TestGo(){
        this.$router.go(-2)
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
