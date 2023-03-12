<template>
    <div>
        <b-container fluid="md">
            <Header />
            <AdminLogin />
        </b-container>

    </div>
</template>

<script>
import Header from '../../components/posts/Header.vue';
import AdminLogin from '../../components/admin/AdminLogin.vue';



export default {
    layout: "coreLayout",
    components: {
        Header,
        //PostList,
        AdminLogin
        // Virtual_tour
    }
}


</script>