<template>
    <b-container fluid="md">
        <Header/>
        <Slide/>
        <!-- <PostList :posts="loadData"/>      -->
    </b-container>
</template>

<script>
import Header from '../../components/posts/Header.vue';
import Slide from '@/components/posts/Slide'
// import PostList from '@/components/posts/PostList'
export default {
    layout:"coreLayout",
    components:{
        Header,
        Slide,
    // PostList,
},
    data(){
        return{
            loadData:[
                {
                    id:"1",
                    title:"เที่ยวบ้านช้าง" ,
                    content:"ปางช้างเเม่แตง จังหวัดเชียงใหม่ ไฮไลท์ที่เด็ดที่ไม่ควรพลาดคือ การขี่ช้างเข้าป่า ลัดเลาะไปตามริมแม่น้ำแม่แตง ชมหมู่บ้านชาวเขาเผ่าลีซอ ต่อด้วยการนั่งเกวียนและล่องแพ",
                    image:"https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__480.jpg"
                    
                 },
                 {
                    id:"2",
                    title:"เที่ยวทะเล" ,
                    content:"เกาะสิมิลัน พังงา ถ้าพูดถึงสวรรค์ของทะเลภาคใต้ อีกหนึ่งที่ที่เราต้องไม่พลาดเลยก็คือ เกาะสิมิลัน พังงา ค่ะ โดยเป็นเกาะน้อยใหญ่มารวมกันเป็น หมู่เกาะสิมิลัน นั่นเอง ที่นี่มีน้ำทะเลที่ใสราวกระจก ผืนทรายนุ่มๆ ที่รอให้ไปเที่ยวในหน้าร้อนกันอยู่!",
                    image:"https://cdn.pixabay.com/photo/2016/11/08/05/08/adult-1807500__340.jpg"
                 },
                 {
                    id:"3",
                    title:"เที่ยวทุ่งนา" ,
                    content:"บ้านข้าวหอมฟาร์มสเตย์ สิงห์บุรี ฟาร์มสเตย์ที่พักสไตล์เรือนไทย บรรยากาศเงียบสงบ ตั้งอยู่ริมนา ที่ไม่ไกลจากกรุงเทพฯ แม้ที่นี่จะไม่มีเครื่องปรับอากาศ แต่ก็ได้สูดลมธรรมชาติเต็มปอด ",
                    image:"https://cdn.pixabay.com/photo/2016/11/14/04/45/bicycle-1822640__480.jpg"
                 }
            ]
        }
    }
}
</script>