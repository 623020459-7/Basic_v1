<template>
    <b-row class="py-2">
        <!-- <PostList title="ชื่อผลงาน ขุนคลังแก้ว"
            content="ศิลปิน: ภฤศพิสิฐ อุ่นช่วง เทคนิค: สีฝุ่นบนผ้าใบ ขนาด: 80x100 cm ราคา: 25,000 บาท"
            image="https://media.istockphoto.com/photos/industrial-interior-with-lights-and-empty-white-walls-picture-id1365338369?b=1&k=20&m=1365338369&s=170667a&w=0&h=fGk3UWpBJUbFmUYPJVrmtOEaK8jzOK1eAiMXgqnvoco=" />
        <PostList title="ชื่อผลงาน ไออุ่นอีสาน 1" content="ศิลปิน: ไกรวุฒิ สารผล เทคนิค: สีน้ำมันบนแคนวาส ขนาด: 70x120 cm"
            image="https://media.istockphoto.com/photos/bright-concrete-interior-with-poster-picture-id877862194?k=20&m=877862194&s=612x612&w=0&h=I8-79yDrvBEBdwSxzhY5J3xmXkswnT8B-CB5i2jZNBQ=" />
        <PostList title="ชื่อผลงาน แดดหลังฝน" content="ศิลปิน: ศราวุธ ดลราศรี เทคนิค: สีน้ำมันบนผ้าใบ ขนาด: 80x100 cm"
            image="https://media.istockphoto.com/photos/financial-ideas-concept-picture-id835294810?k=20&m=835294810&s=612x612&w=0&h=dR-OrNuM8JehVoe3GRLmzGcZj1a57F5i56j4Kpot-FU=" />
        <PostList title="ชื่อผลงาน ไอดินกลิ่นฝน" content="ศิลปิน: ศราวุธ ดลราศรี เทคนิค: สีน้ำมันบนผ้าใบ ขนาด: 60x100 cm"
            image="https://cdn.pixabay.com/photo/2022/10/11/07/23/sculptures-7513604__480.jpg" />
        <PostList title="ชื่อผลงาน สุขในวิถีชีวิต"
            content="ศิลปิน: อุทัย หาระสาร เทคนิค: สีอะคริลิคบนผ้าใบ ขนาด: 140x180 cm"
            image="https://cdn.pixabay.com/photo/2014/11/23/02/16/art-542317__480.jpg" />
        <PostList title="ชื่อผลงาน สุขในวิถีชีวิต หมายเลข 2"
            content="ศิลปิน: อุทัย หาระสาร เทคนิค: สีอะคริลิคบนผ้าใบ ขนาด: 60x80 cm"
            image="https://cdn.pixabay.com/photo/2020/09/09/00/09/cityscape-5556124__480.jpg" /> -->
        <!-- {{ datas }} -->
        <!--<div class="grid-container">
                <div class="caed" v-for="data in datas" :key="data.performance_id">
                    <PostList :title=data.performance_name :content=data.performance_sculptute :image=data.performance_image
                        :location="data.performance_location" />
                </div>
            </div>--><br>
        <div class="grid-container">
            <div   v-for="data in datas" :key="data.performance_id">
                <div class="card">
                    <div class="caed">
                        <img :src="data.performance_image" :alt="data.performance_name"
                        style="width:100%">
                    </div>
                    <h7><b>{{ data.performance_name }}</b></h7>
                    {{ content=data.performance_sculptute }}<br>
                    {{ location=data.performance_location }}<br>
                    {{ location=data.performance_type }}<br>
                    {{ location=data.performance_size }}<br>
                </div><br>
                <!--<PostList :title=data.performance_name :content=data.performance_sculptute :image=data.performance_image
                    :location="data.performance_location" />-->
            </div>
        </div>
    </b-row>
</template>

<script>
import axios from 'axios';
import PostList from '@/components/posts/PostList.vue';

export default {
    components: {
        PostList
    },
    data() {
        return {
            datas: []
        };
    },
    mounted() {
        const url = 'http://localhost:8000/api/getPerformanceCategory_Id/3';
        axios.get(url).then((res) => this.datas = res.data)
        console.log("Success API");
    }
}
</script>
<style scoped>
.grid-container{
    display: grid;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
}
@media (min-width: 576px){
    .grid-container{grid-template-columns: repeat(1,1fr);}
}
@media (min-width: 992px){
    .grid-container{grid-template-columns: repeat(3,1fr);}
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 80%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  
}

.card-container {
  padding: 2px 16px;
}
.caed {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;
}

.caed:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  transform: scale(1.5);
}

.caed-container {
  padding: 2px 16px;
}
</style>