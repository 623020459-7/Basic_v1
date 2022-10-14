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
                {caption:"A",image:require("@/assets/image/686.jpg"),text: "A"}, 
                {caption:"B",image:require("@/assets/image/684.jpg"),text:"B"},
                {caption:"C",image:require("@/assets/image/685.jpg"),text:"C"},
                {caption:"D",image:require("@/assets/image/683.jpg"),text:"D"},
                
            ]
        }
    }
}
</script>
