<template>
    <div>
        <b-container fluid="md">
            <Header />
            <PostContent3 />
        </b-container>

    </div>
</template>

<script >
import Header from '../../components/posts/Header.vue';
import PostContent3 from '../../components/posts/PostContent3.vue';



export default {
    layout: "coreLayout",
    components: {
        Header,
        //PostList,
        PostContent3
        // Virtual_tour
    }
}


</script>