<template>
    <div>
        <b-container fluid="md">

            <AdminNew @sendData="onSubmitted" />
        </b-container>
    </div>
</template>
<script>
import AdminNew from '../../components/admin/AdminNew.vue'
import axios from 'axios'
export default {
    layout: "coreLayout",
    components: {
        AdminNew,
    },
    methods: {
        onSubmitted(postData) {
            axios.post("http://localhost:8000/api/postPerformance", postData)
                .then(res => {
                    console.log(res);
                })
            console.log("Result", postData);
        }
    },
}
</script>