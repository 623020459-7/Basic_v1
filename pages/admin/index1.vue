<template>
    <div>
        <b-container fluid="md">
            <HeaderLogin />
            <AdminLogin />
        </b-container>
    </div>
</template>

<script>
import HeaderLogin from '../../components/posts/HeaderLogin.vue';
import AdminLogin from '../../components/admin/AdminLogin.vue';
export default {
    layout: "coreLayout",
    components: {
        HeaderLogin,
        AdminLogin,
    }
}


</script>