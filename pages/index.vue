<template>
    <b-container fluid="md">
        <index />


    </b-container>
</template>

<script>

import Index from '@/pages/posts/index.vue';

/* import Header from '@/components/posts/Header.vue'; */

export default {
    layout: "coreLayout",
    components: {
        Index,

        //Header,
    }
}
</script>

