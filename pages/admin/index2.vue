<template>
    <div>
        <b-container fluid="md">
            <Header />
            <AdminForm />
        </b-container>

    </div>
</template>

<script>
import Header from '../../components/posts/Header.vue';
import AdminForm from '../../components/admin/AdminForm.vue'



export default {
    layout: "coreLayout",
    components: {
        Header,
        //PostList,
        AdminForm,
        // Virtual_tour
    }
}


</script>