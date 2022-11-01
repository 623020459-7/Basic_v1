<template>
    <b-container fluid="md">
        <Header />
        <PostContent />
        <!-- <virtual_tour /> -->
        <!-- <Virtual_tour /> -->

        <!-- <PostList :posts="loadData"/>      -->
    </b-container>
</template>

<script>
import Header from '../../components/posts/Header.vue';
// import PostList from '../../components/posts/PostList.vue'
import PostContent from '../../components/posts/PostContent.vue';
//import virtual_tour from '@/components/virtual/virtual_tour.vue';
// import Virtual_tour from '@/components/virtual/Virtual_tour.html';

export default {
    layout: "coreLayout",
    components: {
        Header,
        //PostList,
        PostContent
        // Virtual_tour
    }
}

</script>