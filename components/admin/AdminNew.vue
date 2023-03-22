<template>
    <!-- <div>
        <br />
        <h2>Form</h2>
        <form>
            <b-text-field v-model="name" label="Name"></b-text-field>
            <b-text-field v-model="sculptute" label="Sculptute"></b-text-field>
            <b-text-field v-model="location" label="Location"></b-text-field>
            <b-btn @click="submit({ name, sculptute, location })">{{
                id ? "Edit" : "Submit"
            }}</b-btn>
        </form>
    </div> -->
    <div>
        <form @submit.prevent="onSubmit">
            <h3>Create Performance</h3>
            <div class="md-2">
                <label>Name</label>
                <input type="text" v-model="performance_name" class="form-control" required>
            </div>
            <div class="md-2">
                <label>Sculptute</label>
                <input type="text" v-model="performance_sculptute" class="form-control" required>
            </div>
            <div class="mb-2">
                <label>Location</label>
                <input type="text" v-model="performance_location" class="form-control" required>
            </div>
            <div class="mb-2">
                <label>Image</label>
                <input type="text" v-model="performance_image" class="form-control" required>
            </div>
            <div class="mb-2">
                <label>Type</label>
                <input type="text" v-model="performance_type" class="form-control" required>
            </div>
            <div class="mb-2">
                <label>Size</label>
                <input type="text" v-model="performance_size" class="form-control" required>
            </div>
            <div class="mb-2">
                <label>CategoryId</label>
                <input type="text" v-model="category_id" class="form-control" required>
            </div>
            <div>
                <b-btn
                    @click="submit({ performance_name, performance_sculptute, performance_location, performance_image, performance_type, performance_size, category_id })">{{
                        id ? 'Edit'
                        : submit }}Save</b-btn>
                <NuxtLink to="/admin/index2" class="btn btn">Go Back</NuxtLink>
            </div>
        </form>
    </div>
</template>
<script >
// import { userInfo } from 'os'; -->



export default ({
    computed: {
        id: {
            get() {
                return this.$store.state.performance.id;
            },
            set(value) {
                this.$store.commit("user/setId", value);
            },
        },
        name: {
            get() {
                return this.$store.state.performance.name;
            },
            set(value) {
                this.$store.commit("user/setName", value);
            },
        },
        sculptute: {
            get() {
                return this.$store.state.performance.sculptute;
            },
            set(value) {
                this.$store.commit("user/setSculptute", value);
            },
        },
        location: {
            get() {
                return this.$store.state.performance.location;
            },
            set(value) {
                this.$store.commit("user/setLocation", value);
            },
        },
        image: {
            get() {
                return this.$store.state.performance.image;
            },
            set(value) {
                this.$store.commit("user/setImage", value);
            },
        },
        type: {
            get() {
                return this.$store.state.performance.type;
            },
            set(value) {
                this.$store.commit("user/setType", value);
            },
        },
        size: {
            get() {
                return this.$store.state.performance.size;
            },
            set(value) {
                this.$store.commit("user/setSize", value);
            },
        },
        category: {
            get() {
                return this.$store.state.performance.category;
            },
            set(value) {
                this.$store.commit("user/setCategory", value);
            },
        },
    },
    methods: {
        async submit(performance) {
            if (performance.id) {
                await this.$axios.put("http://localhost:8000/api/putPerformance" + performance.id, {
                    name: performance.performance_name,
                    sculptute: performance.performance_sculptute,
                    location: performance.performance_location,
                    image: performanc.performance_image,
                    type: performance.performance_type,
                    size: performance.performance_size,
                    category: performance.category_id
                });
            } else {
                await this.$axios.post("http://localhost:8000/api/postPerformance", {
                    name: performance.performance_name,
                    sculptute: performance.performance_sculptute,
                    location: performance.performance_location,
                    image: performanc.performance_image,
                    type: performance.performance_type,
                    size: performance.performance_size,
                    category: performance.category_id
                });
            }
            this.resetPerformance({ id: 0, name: "", sculptute: "", location: "", image: "", type: "", size: "", category: "", password: "" });
            this.$store.commit(
                "performances/storeData",
                (await this.$axios.get("http://localhost:8000/api/performance")).data
            );
        },
        resetPerformance(performance) {
            this.$store.commit("performance/setId", performance.id);
            this.$store.commit("performance/setName", performance.name);
            this.$store.commit("performance/setSculptute", performance.sculptute);
            this.$store.commit("performance/setLocation", performance.location);
        },
    },
})
    //name: "AdminNew",
    // data() {
    //     return {
    //         performance_name: "",
    //         performance_sculptute: "",
    //         performance_location: "",
    //         performance_image: "",
    //         performance_type: '',
    //         performance_size: "",
    //         category_id: ""
    //     }
    // },
    //methods: {
    // async submit(performance){
    //     if(data.performance_id){
    //         await this.$axios.put("http://localhost:8000/api/post/Performance" + data.performance_id,performance );
    //     }else{
    //         await this.$axios.post("http://localhost:8000/api/post/Performance",){
    //             performance_name: performance_image,
    //             form.performance_sculptute
    //         }
    //     }
    // }
    //  },
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



 


<!-- <template>
    <div>
        <h2>Employee Registation</h2>
        <form @submit.prevent="save">
            <div class="form-group">
                <label>Performance </label>
                <input type="text" v-model="data.performance_id" class="form-control" placeholder=" name">
            </div>
            <div class="form-group">
                <label>Mobile</label>
                <input type="text" v-model="data.performance_name" class="form-control" placeholder="Mobile">
            </div>

            <button type="submit" class="btn btn-primary">Save</button>
        </form> -->
        <!-- <h2>Employee View</h2> -->
        <!-- <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col"> Name</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="data in datas" v-bind:key="data.performance_id">

                    <td>{{ data.performance_id }}</td>
                    <td>{{ data.performance_name }}</td>

                    <td>
                        <button type="button" class="btn btn-warning" @click="edit(data.performance_id)">Edit</button>
                        <button type="button" class="btn btn-danger" @click="remove(data)">Delete</button>
                    </td>
                </tr>

            </tbody>
        </table>
    </div> -->
<!-- </template> -->

<!-- // import axios from 'axios';
// export default {
//     name: 'AdminNew',
//     data() {
//         return {
//             datas: {
//                 performance_id: "",
//                 performance_name: ""
//             }
//         };
//     },
//     mounted() {
//         const url = 'http://localhost:8000/api/performance';
//         axios.get(url).then((res) => this.datas = res.data)
//         console.log("Success API");
//     }
//}

// created() {
//     this.PerformanceLoad();
// },
// mounted() {
//     console.log("mounted() called.......");

// },
//methods: {
// data() {
//     return {
//         datas: []
//     };
// },
// mounted() {
//     const url = 'http://localhost:8000/api/performance';
//     axios.get(url).then((res) => this.datas = res.data)
//     console.log("Success API");
// }
// PerformanceLoad() {
//     const url = 'http://localhost:8000/api/performance';
//     axios.get(url).then((res) => this.datas = res.data)
//     console.log("Success API");


// },

// save() {
//     if (this.data.performance_id == '') {
//         this.saveData();
//     }
//     else {
//         this.updateData();
//     }

// },
// saveData() {
//     axios.post("http://localhost:8000/api/post/Performance", this.data)
//         .then(
//             ({ data }) => {
//                 alert("saveddddd");
//                 this.EmployeeLoad();
//             }
//         )

// },
    //     edit(data)
    //    {
    //     this.data = data;

    //    },
    //    updateData()
    //    {
    //       var editrecords = 'http://localhost:8000/user/update/'+ this.employee._id;
    //       axios.patch(editrecords, this.employee)
    //       .then(
    //         ({data})=>{
    //           this.employee.name = '';
    //           this.employee.address = '',
    //           this.employee.phone = ''
    //           this.id = ''
    //           alert("Updated!!!");
    //           this.EmployeeLoad();
    //         }
    //       );

    //    },
 -->
