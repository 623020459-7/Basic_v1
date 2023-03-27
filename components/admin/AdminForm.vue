<template>
    <div container-md>
        <NuxtLink to="/admin/index3" class="btn-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 20 20">
                <path fill="currentColor"
                    d="M10 1.6a8.4 8.4 0 1 0 0 16.8a8.4 8.4 0 0 0 0-16.8zm5 9.4h-4v4H9v-4H5V9h4V5h2v4h4v2z">
                </path>
            </svg>
        </NuxtLink>
        <div class="container">
            <table class="">
                <thead>
                    <tr class="table-header">
                        <th class="white--text">ID</th>
                        <th class="white--text">Name</th>
                        <th class="white--text">Scluptute</th>
                        <th class="white--text">Location</th>
                        <th class="white--text">Image</th>
                        <th class="white--text">Type</th>
                        <th class="white--text">Size</th>
                        <th class="white--text">CategoryId</th>
                        <th style="width: 130px;">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data, index) in datas" :key="data.performance_id">
                        <td>{{ data.performance_id }}</td>
                        <td>{{ data.performance_name }}</td>
                        <td>{{ data.performance_sculptute }}</td>
                        <td>{{ data.performance_location }}</td>
                        <td>{{ data.performance_image }}</td>
                        <td>{{ data.performance_type }}</td>
                        <td>{{ data.performance_size }}</td>
                        <td>{{ data.category_id }}</td>
                        <td>
                            <NuxtLink :to="{ path: '/admin/index4', query: { id: data.performance_id } }"
                                class="btn btn-warning btn-sm me-1">
                                Edit
                            </NuxtLink>
                            <b-btn type=" reset" @click="deletePerformance(data.performance_id, index)"
                                class="btn btn-danger btn-sm">delete</b-btn>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script >
import axios from 'axios';
export default ({
    name: 'EntypoCircleWithPlus',
    data() {
        return {
            datas: []
        };
    },
    props: {
        post: {
            type: Object,
            required: false
        }
    },
    mounted() {
        const url = 'http://localhost:8000/api/performance/';
        axios.get(url).then((res) => this.datas = res.data)
        console.log("Success API");
    },
    methods: {
        onReset(evt) {
            evt.preventDefault();
            this.data.performance_id = '';

        }
    },
    methods: {
        deletePerformance(id, index) {
            axios.delete("http://localhost:8000/api/deletePerformance/" + id)
                .then(res => {
                    this.data.splice(index, 1)
                    console.log(res);
                })
            console.log(id);
        }
    },
})

</script>
<style>
.container-md {
    /* flex: 33%; */
    max-width: 100%;
    align-content: center;
    padding-left: 15px;
    padding-top: 50px;
}

.container {
    /* flex: 33%; */
    max-width: 200%;
    /* align-content: center; */
    padding-left: 15px;
    padding-top: 20px;
}

.table-header {
    background-color: var(--color-kku);
    color: aliceblue;
    padding: 20px;
}
</style>