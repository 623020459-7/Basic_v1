<template>
    <div>
        <b-container fluid="md">
            <HeaderAdmin />
            <AdminForm @reset="onReset" />
        </b-container>
    </div>
</template>
<script>
import HeaderAdmin from '../../components/posts/HeaderAdmin.vue';
import AdminForm from '../../components/admin/AdminForm.vue'
export default {
    layout: "coreLayout",
    components: {
        HeaderAdmin,
        AdminForm,

    },
    methods: {
        onReset(deleteData) {
            axios.delete("http://localhost:8000/api/deletePerformance/" + performance_id, deleteData)
                .then(res => {
                    console.log(res);
                    // this.route.push("/admin/index2")
                })
            console.log("Result", deleteData);
        }
    },
}
</script>