<template>
    <div>
        <PostList isAdmin :posts="loadData"/>       
    </div>
</template>
<script>
import PostList from '@/components/posts/PostList'
import axios from 'axios'
export default {
    components:{
        PostList
    },
    data(){
        return{
            loadData:[]
        }
      
        },
        asyncData(context) {
              return axios.get("https://nuxt-tutorial-51b8b-default-rtdb.firebaseio.com/posts.json")
              .then(res=>{
                  const data=[];
                  for(const key in res.data){
                      data.push({...res.data[key],id:key})
                  }
                  return{
                      loadData:data
                  }
              });
          },
    }


</script>
