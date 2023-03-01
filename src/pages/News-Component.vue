<template>
  <div>
     <H1>News</H1>
      <h2 :style="{opacity}" >歡迎學習Vue</h2>
     <ul>
      <li>消息1 <input type="text"></li>
      <li>消息2 <input type="text"></li>
      <li>消息3 <input type="text"></li>
     </ul>
  </div>
</template>

<script>
export default {
   name:'News-Component',
   data() {
    return {
       opacity:1
    }
   },
   mounted(){
   
   },
   beforeDestroy(){
      console.log('News即將被銷毀');
     
   },
   activated(){
      console.log('News被激活');
       this.timer =   setInterval(() => {
        
          this.opacity = this.opacity - 0.01
          if(this.opacity <= 0)
             this.opacity = 1

          console.log(this.opacity);
       }, 50);
   },
   deactivated(){
      console.log('News失活了');
       clearInterval(this.timer)
   }
}
</script>

<style>

</style>