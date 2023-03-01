<template>
  <div>
    <h1>About</h1>
  </div>
</template>

<script>
export default {
  name:'About-Component'
  ,mounted(){
    console.log('About現在正要掛載',this);
     window.AboutRoute = this.$route
     window.AboutRouter = this.$router
  },
  beforeRouteEnter (to, _, next) {
     if(to.meta.isAuth)
            {
                if(localStorage.getItem('school') == 'atguigu')
                {
                  next()
                }
                else
                {        
                  alert('學校名不對，你没有權限')
                }
            }
            else{
               next()
            }
           }
  
  /*
  beforeDestroy(){
    console.log('About現在正要銷毀');
  } */
}
</script>
  
<style>

</style>