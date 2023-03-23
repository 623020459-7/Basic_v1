<template>
    <div>
        <h2>Form</h2>
        <form @submit="onSubmit" @reset="onReset">
            <div class="md-2">
                <label>Name</label>
                <input type="text" v-model="form.name" class="form-control" placeholder="name" required>
            </div>
            <div class="md-2">
                <label>Sculptute</label>
                <input type="text" v-model="form.sculptute" class="form-control" placeholder="sculptute" required>
            </div>
            <div class="mb-2">
                <label>Location</label>
                <input type="text" v-model="form.location" class="form-control" placeholder="location" required>
            </div>
            <div class="mb-2">
                <label>Image</label>
                <input type="text" v-model="form.image" class="form-control" placeholder="image" required>
            </div>
            <div class="mb-2">
                <label>Type</label>
                <input type="text" v-model="form.type" class="form-control" placeholder="text" required>
            </div>
            <div class="mb-2">
                <label>Size</label>
                <input type="text" v-model="form.size" class="form-control" placeholder="size" required>
            </div>
            <div class="mb-2">
                <label>CategoryId</label>
                <input type="text" v-model="form.category" class="form-control" placeholder="categoryid" required>
            </div>
            <b-btn type="submit">save</b-btn>
            <b-btn type="reset">delete</b-btn>

        </form>
    </div>
</template>
<script >
export default ({
    data() {
        return {
            form: {
                name: "",
                sculptute: "",
                location: "",
                image: "",
                type: '',
                size: "",
                category: ""
            }
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            this.$emit('sendData', this.form)
            // console.log(this.form);
        },
        onReset(evt) {
            evt.preventDefault();
            this.form.name = '';
            this.form.sculptute = '';
            this.form.location = '';
            this.form.image = '';
            this.form.type = '';
            this.form.size = '';
            this.form.category = '';

        }
    },

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
