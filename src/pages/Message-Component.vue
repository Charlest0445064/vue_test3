<template>
  <div>
    
    <div>
        <div>
            <h1>Message</h1>
            <ul  >
                <li v-for="item in MessageList" :key="item.id"> 
                    <router-link :to="{
                        name:'abc'
                        ,query:{
                            id:item.id,
                            msg:item.msg
                        }
                                }">{{item.msg}}</router-link> 
                       <button @click="ShowReplace(item)" >replace</button>
                       <button @click="ShowPush(item)">push</button> 
                </li>
                

            </ul>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name:'Message-Component',
  data() {

   
    return {
          MessageList: [
        {id:'001',msg:'消息001'},
        {id:'002',msg:'消息002'},
        {id:'003',msg:'消息003'}
    ]
    }
  },
  methods:{
      ShowPush(m){
         console.log(this.$router.query);
         this.$router.push(
            {
              name:'abc'
             ,query:{
                id:m.id,
                msg:m.msg
             }
            }
         )
      },
      ShowReplace(m){
         console.log(this.$router.query);
         this.$router.replace(
            {
              name:'abc'
             ,query:{
                id:m.id,
                msg:m.msg
             }
            }
         )
      }
  },
      beforeDestroy() {
          console.log('Message即將銷毀');
      },
}
</script>

<style>

</style>