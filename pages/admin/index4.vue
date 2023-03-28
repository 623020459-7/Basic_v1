<template>
    <div>
        <b-container fluid="md">
            <AdminEditForm />
        </b-container>
    </div>
</template>
<script >
import AdminEditForm from '../../components/admin/AdminEditForm.vue'
export default {
    layout: "coreLayout",
    components: {
        AdminEditForm,
    },
}
</script>