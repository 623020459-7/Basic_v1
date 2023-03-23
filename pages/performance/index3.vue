<template>
    <div>
        <b-container fluid="md">
            <Header />
            <PostContent2 />
        </b-container>

    </div>
</template>

<script >
import Header from '../../components/posts/Header.vue';
import PostContent2 from '../../components/posts/PostContent2.vue';



export default {
    layout: "coreLayout",
    components: {
        Header,
        //PostList,
        PostContent2
        // Virtual_tour
    }
}


</script>