<template>
   <div>
     <h1>This is Home</h1>
     <div>
      <div>
        <router-link replace to="/Home/News" >News</router-link>&nbsp;
        <router-link replace to="/Home/Message" >Message</router-link>
      </div>
      <div>
         <keep-alive :include="['News-Component','Message-Component']" >
          <router-view></router-view>
         </keep-alive>
         
      </div>
     </div>
   </div>
</template>

<script>
export default {
   name:'Home-Component'
    ,mounted(){
    console.log('Home現在正要掛載',this);
    window.HomeRoute = this.$route
    window.HomeRouter = this.$router
  },/*
  beforeDestroy(){
    console.log('Home現在正要銷毀');
  } */
}
</script>

<style>

</style>