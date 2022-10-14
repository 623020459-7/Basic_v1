<template>
    <div>
        <b-carousel id="slider" 
        controls
        indicators
        >
    <div v-for="item in items" v-bind:key="item.id">
      <b-carousel-slide
        :caption=item.caption
        :text=item.text
        :img-src=item.image
      ></b-carousel-slide>
    </div>
        </b-carousel>
    </div>
</template>

<script>
export default {
    data(){
        return{
            items:[
                {caption:"",image:require("@/assets/image/687.jpg"),text:""},
                {caption:"",image:require("@/assets/image/688.jpg"),text:""},
                {caption:"",image:require("@/assets/image/689.jpg"),text:""},
                {caption:"",image:require("@/assets/image/690.jpg"),text:""},
                
            ]
        }
    }
}
</script>
<style>
.carousel-inner {
    position: relative;
    width: 100%;
    height: 80vh;
    overflow: hidden;
    background-position: center;
}
.carousel-control-prev:hover,
.carousel-control-next:hover {
    background:  none;
}
</style>