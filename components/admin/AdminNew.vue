<template>
    <div class="newForm">
        <h2>Create Performance</h2>
        <form @submit="onSubmit" @reset="onReset">
            <div class="md-2">
                <label>Name</label>
                <input type="text" v-model="form.name" class="form-control" placeholder="name" required>
            </div>
            <div class="md-2">
                <label>Sculptute</label>
                <input type="text" v-model="form.sculptute" class="form-control" placeholder="sculptute" required>
            </div>
            <div class="md-2">
                <label>Location</label>
                <input type="text" v-model="form.location" class="form-control" placeholder="location" required>
            </div>
            <div class="md-2">
                <label>Image (URL)</label>
                <input type="text" v-model="form.image" class="form-control" placeholder="image" required>
            </div>
            <div class="md-2">
                <label>Type</label>
                <input type="text" v-model="form.type" class="form-control" placeholder="text" required>
            </div>
            <div class="md-2">
                <label>Size</label>
                <input type="text" v-model="form.size" class="form-control" placeholder="size" required>
            </div>
            <div class="md-2">
                <label>CategoryId</label>
                <input type="text" v-model="form.category" class="form-control" placeholder="categoryid" required>
            </div>
            <div class="btn-sub">
                <b-btn class="btn-s" type="submit">save</b-btn>
                <b-btn to="/admin/index2" class="btn-d">Go Back</b-btn>
            </div>
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
            alert("เพิ่มข้อมูลสำเร็จ")
            this.$router.push("/admin/index2")
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
h2 {
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

.md-2 {
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


 

