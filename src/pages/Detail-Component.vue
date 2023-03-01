<template>
  <div>
     <h1>This is Detail</h1>
     id:{{id}}<br>
     msg:{{msg}}<br>
    
  </div>
</template>

<script>
export default {
  props:['id','msg'],
  mounted(){
     //console.log(this.$route.query.id);
  },
  
}
</script>

<style>

</style>