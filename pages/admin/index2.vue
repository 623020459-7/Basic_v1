<template>
    <div>
        <b-container fluid="md">
            <AdminForm />
        </b-container>
    </div>
</template>
<script>
import AdminForm from '../../components/admin/AdminForm.vue'
export default {
    layout: "coreLayout",
    components: {
        AdminForm,
    }
}
</script>