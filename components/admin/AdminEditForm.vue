<template>
    <div class="newForm">
        <form @submit.prevent="onSubmitted">
            <h3>Edit Performance</h3>
            <div class="mb-2">
                <label>Name</label>
                <input type="text" v-model="name" class="form-control" placeholder="name" required>
                <input type="text" v-model="id" readonly="isReadOnly" style="display: none;" class="form-control"
                    placeholder="name" required>
            </div>
            <div class="mb-2">
                <label>Sculptute</label>
                <input type="text" v-model="sculptute" class="form-control" placeholder="sculptute" required>
            </div>
            <div class="mb-2">
                <label>Location</label>
                <input type="text" v-model="location" class="form-control" placeholder="location" required>
            </div>
            <div class="mb-2">
                <label>Image (URL)</label>
                <input type="email" v-model="image" class="form-control" placeholder="image" required>
            </div>
            <div class="mb-2">
                <label>Type</label>
                <input type="text" v-model="type" class="form-control" placeholder="type" required>
            </div>
            <div class="mb-2">
                <label>Size</label>
                <input type="text" v-model="size" class="form-control" placeholder="size" required>
            </div>
            <div class="mb-2">
                <label>CategoryId</label>
                <input type="text" v-model="category_id" class="form-control" placeholder="categoryid" required>
            </div>
            <div class="btn-sub">
                <b-btn class="btn-s" type="submit">save</b-btn>
                <b-btn to="/admin/index2" class="btn-d">Go Back</b-btn>
            </div>
        </form>
    </div>
</template>
<script  >
import axios from 'axios';

export default ({

    data() {
        return {
            id: 0,
            name: "",
            sculptute: "",
            location: "",
            image: "",
            type: "",
            size: "",
            category_id: 0

        }
    },
    mounted() {
        axios.get("http://localhost:8000/api/getPerformance/ " + this.$route.query.id).then((res) => {
            // var res.data = res.data;
            this.id = res.data.performance_id
            this.name = res.data.performance_name
            this.sculptute = res.data.performance_sculptute
            this.location = res.data.performance_location
            this.image = res.data.performance_image
            this.type = res.data.performance_type
            this.size = res.data.performance_size
            this.category_id = res.data.category_id
        });
    },
    methods: {
        onSubmitted() {
            axios.put("http://localhost:8000/api/putPerformance/" + this.id, {
                performance_id: this.id,
                performance_name: this.name,
                performance_sculptute: this.sculptute,
                performance_location: this.location,
                performance_image: this.image,
                performance_type: this.type,
                performance_size: this.size,
                category_id: this.category_id
            }).then(res => {
                if (res.status === 200) {
                    alert("แก้ไขข้อมูลสำเร็จ")
                    this.$router.push("/admin/index2")
                } else {
                    alert("แก้ไขข้อมูลไม่สำเร็จ เกิดข้อผิดพลาด กรุณาตรวจสอบข้อมูลอีกครั้ง")
                }
            })
        },

    },
})
</script>
<style >
a:hover,
.btn-sub:hover {
    color: #fff;
    background-color: var(--color-kku);
    border-color: var(--color-kku);
    text-decoration: none;
    padding: 0.25rem 1rem;
    border-radius: 1.5rem;
}

h3 {
    padding: 20px;
    padding-top: 20px;
    color: #fff;
}

.newForm {
    border-radius: 10px;
    /* background-color: #f2f2f2; */
    padding: 15px;
    background-color: rgb(119, 43, 20);
    /* display: block; */
    width: 60%;
    margin-left: auto;
    margin-right: auto;
}

.mb-2 {
    color: #fff;
    font-size: 20px;
}

.btn-sub {
    padding: 20px;

}

.btn-s {
    padding-left: 10px;
    background-color: #fff;
    color: black;
}

.btn-d {
    background-color: #fff;
    color: black;
}
</style>




