<template>
    <div>
        <!-- <h3>All Performance</h3> -->
        <!-- <div class="row"> -->
        <!-- <div class="col-sm-8"> -->
        <NuxtLink to="/admin/index3" class="btn btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 20 20">
                <path fill="currentColor"
                    d="M10 1.6a8.4 8.4 0 1 0 0 16.8a8.4 8.4 0 0 0 0-16.8zm5 9.4h-4v4H9v-4H5V9h4V5h2v4h4v2z">
                </path>
            </svg>
        </NuxtLink>
        <!-- </div> -->
        <!-- <div class="col-sm-4"></div> -->
        <!-- </div> -->
        <!-- Tabla y formulario -->
        <div class="col-sm-4">

            <table class="table table-dark" >
                
                <thead>
                    <tr class="purple darken-2">
                        <th class="white--text">ID</th>
                        <th class="white--text">Name</th>
                        <th class="white--text">Scluptute</th>
                        <th class="white--text">Location</th>
                        <th class="white--text">Image</th>
                        <th class="white--text">Type</th>
                        <th class="white--text">Size</th>
                        <th class="white--text">CategoryId</th>
                        <!-- <th class="white--text">Category_id</th> -->
                        <th style="width: 130px;">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in datas" :key="data.performance_id">
                        <td>{{ data.performance_id }}</td>
                        <td>{{ data.performance_name }}</td>
                        <td>{{ data.performance_scluptute }}</td>
                        <td>{{ data.performance_location }}</td>
                        <td>{{ data.performance_image }}</td>
                        <td>{{ data.performance_type }}</td>
                        <td>{{ data.performance_size }}</td>
                        <td>{{ data.category_id }}</td>
                        <td>
                            <NuxtLink :to="`/admin/index3${data.performance_id}`" class="btn btn-warning btn-sm me-1">Edit
                            </NuxtLink>
                            <button type="button" class="btn btn-danger btn-sm"
                                @click="destroy(data.performance_id)">Delete</button>
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
    mounted() {
        const url = 'http://localhost:8000/api/performance/';
        axios.get(url).then((res) => this.datas = res.data)
        console.log("Success API");
    }
})
</script>
