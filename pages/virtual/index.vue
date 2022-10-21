<template>
    <b-container fluid="md">
        <Header />
        <virtual_tour />

        <!-- <PostList :posts="loadData"/>      -->
    </b-container>
</template>

<script>
import Header from '../../components/posts/Header.vue';
import virtual_tour from '@/components/virtual/virtual_tour.vue';

export default {
    layout: "coreLayout",
    components: {
        Header,
        virtual_tour
    }
}

</script>