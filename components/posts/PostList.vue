<template>
    <b-row class="py-2">
            <PostContant 
                    v-for="post in posts" 
                        :key="post.id"
                        :id="post.id"
                        :title="post.title"
                        :content="post.content"
                        :image="post.image"
                        :isAdmin="isAdmin"
            />
           
        </b-row>
</template>

<script>
import PostContant from "@/components/posts/PostContant"
export default {
    layout:"coreLayout",
    components:{
        PostContant
    },
    props:{
        isAdmin:{
            type:Boolean,
            default:false
        },
        posts:{
            type:Array,
            required:true
        }
    }
}
</script>