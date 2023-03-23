<template>
    <div>
        <form @submit.prevent="updatePerformance">
            <h3>Edit Performance</h3>
            <div class="md-2">
                <label>Name</label>
                <input type="text" v-model="form.performance_name" class="form-control" required>
            </div>
            <div class="md-2">
                <label>Sculptute</label>
                <input type="text" v-model="form.performance_sculptute" class="form-control" required>
            </div>
            <div class="mb-2">
                <label>Location</label>
                <input type="text" v-model="form.performance_location" class="form-control" required>
            </div>
            <div class="mb-2">
                <label>Image</label>
                <input type="email" v-model="form.performance_image" class="form-control" required>
            </div>
            <div class="mb-2">
                <label>Type</label>
                <input type="text" v-model="form.performance_type" class="form-control" required>
            </div>
            <div class="mb-2">
                <label>Size</label>
                <input type="text" v-model="form.performance_size" class="form-control" required>
            </div>
            <div class="mb-2">
                <label>CategoryId</label>
                <input type="text" v-model="form.category_id" class="form-control" required>
            </div>
            <div>
                <button type="submit" class="btn-save-performance">Update</button>
                <NuxtLink to="/admin/index2" class="btn btn">Go Back</NuxtLink>
            </div>
        </form>
    </div>
</template>
<script  >
import axios from 'axios';
export default ({
    data() {
        return {
            form: {

            }
        };
    },
    mounted() {
        const url = 'http://localhost:8000/api/performance';
        axios.post(url).then((res) => this.datas = res.data)
        console.log("Success API");
    }
})

</script>
<style >
a:hover,
.btn-save-performance:hover {
    color: #fff;
    background-color: var(--color-kku);
    border-color: var(--color-kku);
    /* text-decoration: none; */
    padding: 0.25rem 1rem;
    border-radius: 1.5rem;

}
</style>




