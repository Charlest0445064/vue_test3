import VueRouter from "vue-router";
import Home from '../pages/Home-Component'
import About from '../pages/About-Component'
import News from '../pages/News-Component'
import Message from '../pages/Message-Component'
import Detail from '../pages/Detail-Component'

const router = new VueRouter({
   mode:'history',
   routes:[
    {  name:'H',
       path:'/Home',
      component:Home,
      meta:{title:'主頁'},
      children:[
         { 
           name:'N',
           path:'News',
           component:News,
           meta:{isAuth:true,title:'新聞'}
         /*  beforeEnter:(to,_,next) => {
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
           } */
         }, 
         {
          name:'M',
          path:'Message',
          component:Message,         
           meta:{isAuth:true,title:'消息'},
          children:[
             {
               name:'D',
               path:'Detail',
               component:Detail,
               props($route){
                 console.log($route);
                 return {id:$route.query.id,msg:$route.query.msg}
               }
             }
          ]
        },
      ]
    },
    { name:'A',
      path:'/About',
      component:About,
      meta:{isAuth:true,title:'關於'}
    }
    ]  
})

router.beforeEach((to,from,next) => {
    console.log(to)
    console.log(from)
    
    console.log(to.meta.isAuth)
    
    next()

})

router.afterEach((to) => {
    document.title = to.meta.title || '桂谷系統'
})

export default router