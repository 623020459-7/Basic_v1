<template>
        <AdminFrom @sendData="onSubmitted"/>
</template>
<script>
import AdminFrom from '@/components/admin/AdminFrom'
import axios from 'axios'
export default {
    components:{
        AdminFrom
    },
    methods:{
        onSubmitted(postData){
            axios
            .post("https://nuxt-tutorial-51b8b-default-rtdb.firebaseio.com/post.json",postData)
            .then(res=>{
                        console.log(res);
            })
        }
    }
}
</script>