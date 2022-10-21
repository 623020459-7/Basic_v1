
<template>

  <!-- <div id="app" style="width: 80%; height: 700px; margin-left: 150px; margin-top: 50px"> -->
  <meta id="viewer" name="viewport" content="width=device-width, initial-scale=1.0">

</template>

<!-- <link  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/photo-sphere-viewer@4/dist/photo-sphere-viewer.min.css"/> -->

<!-- <script src="https://cdn.jsdelivr.net/npm/three/build/three.min.js"></script> -->

<!-- <link rel="stylesheet" href="photo-sphere-viewer/dist/photo-sphere-viewer.css"/> -->

<script>
// import { Viewer } from 'photo-sphere-viewer';
// const viewer = new Viewer({
//   container: () => document.querySelector('#viewer'),
//   panorama: 'https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg',
// });

// export default {
//   async mounted() {

//   },
// }


// import { Viewer } from 'photo-sphere-viewer'
// import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'

//       var PSV = new PhotoSphereViewer ({
//     container: 'viewer',ฟ
//     panorama: 'assets/No1.jpg',
//   });

/*     export default   {}
 */ // data(){
//   return{
//     viewer:'',
//     imgurl1:'https://cdn.rawgit.com/mistic100/Photo-Sphere-Viewer/3.1.0/example/Bryce-Canyon-National-Park-Mark-Doliner.jpg',
//     imgurl2:'',
//     imgurl3:'',
//   }
// },
// head () {
//   return {
//     title: '', // Other meta information
//     script: [
//       {
//         hid: 'stripe',
//         src: '<https://cdn.jsdelivr.net/npm/three/build/three.min.js>',
//         defer: true
//       },
//       {
//         hid: 'stripe',
//         src: '<https://cdn.jsdelivr.net/npm/uevent@2/browser.min.jshttps://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js>',
//         defer: true
//       },
//       {
//         hid: 'stripe',
//         src: '<https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js>',
//         defer: true
//       },
//       {
//         hid: 'stripe',
//         src: '<https://cdn.jsdelivr.net/npm/photo-sphere-viewer@4/dist/photo-sphere-viewer.min.js>',
//         defer: true
//       },
//       {
//         hid: 'stripe',
//         src: '<https://cdn.jsdelivr.net/npm/photo-sphere-viewer@4/dist/plugins/virtual-tour.js>',
//         defer: true
//       },
//       {
//         hid: 'stripe',
//         src: '<https://cdn.jsdelivr.net/npm/photo-sphere-viewer@4/dist/plugins/markers.min.js>',
//         defer: true
//       }
//     ],
//     link: [
//       {
//         rel: 'stylesheet',
//         href: "https://cdn.jsdelivr.net/npm/photo-sphere-viewer@4/dist/photo-sphere-viewer.min.css"
//       },
//       // {
//       //   rel: 'stylesheet',
//       //   href: 'https://cdn.jsdelivr.net/npm/photo-sphere-viewer@4/dist/plugins/markers.min.css'
//       // },
//     ]
//   }
// }

//   mounted(){
//    var  viewer = new Viewer({
//       container:document.querySelector('Viewer'),
//       panorama:'assets/No1.jpg',
//       size:{
//         height: '100vw',
//         width: '100vh'
//       },
//       plugins:[
//         [PhotoShereViewer.MarkersPlugin,{

//           markers: [
//             {
//             id:'circle',
//             tooltip:'A ciecle of radius 30',
//             circle:30,
//             svgStyle:{
//               fill:'rgb(255,255,0,0.3)',
//               stroke:'yellow',
//               strokeWidth:'2px',
//             },
//             longitude: -1.5,
//             latitude: -0.2,
//             anchor: 'center right'
//           }
//           ],
//     }],
//   ],
//   });
//   const markersPlugin = this.viewer.getPlugin(PhotoShereViewer.MarkersPlugin);
//   markersPlugin.on('selec-marker', (e, marker) =>{
//     this.viewer.animate({
//       longitude: marker.config.longitude,
//       latitude: marker.config.latitude,
//       zoom: 100,
//       speed: '-2rpm',
//     }).then(() =>
//     this.viewer.setPanorama(
//       this.imgurl2
//     ).then(() =>
//     markersPlugin.updateMarker({
//       id: marker.ig,
//       longitude:-1.8,
//       latitude: -0.28,
//     }),
//       this.viewer.animate({
//         zoom: 50,
//         speed:'2rpm',
//       }).then(() =>
//         this.imgurl2 = this.imgurl3,
//       )
//     )
//     )
//    });
//   }
// }

//    var viewer = new PhotoSphereViewer.Viewer({
//   container: document.querySelector("#photosphere"),
//   panorama: 'No2.jpg',
//   loadingImg:
//     "https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif",
//   touchmoveTwoFingers: true,
//   mousewheelCtrlKey: true,
//   caption: "360 Virtual of KKU Arts & Culture Center",
//   defaultLong: "100deg",
//   plugins: [
//     [
//       PhotoSphereViewer.MarkersPlugin,
//       {
//         hideButton: false,
//         listButton: false,
//       },
//     ],
//     [
//       PhotoSphereViewer.VirtualTourPlugin,
//       {
//         positionMode: PhotoSphereViewer.VirtualTourPlugin.MODE_GPS,
//         renderMode: PhotoSphereViewer.VirtualTourPlugin.MODE_3D,
//       },
//     ],
//   ],
// });
</script>

<style>
#vie
#viewer {
  width: 100vh;
  height: 50vh;
}

/* html,
    body,
    #photosphere {
      margin: 0;
      width: 100%;
      height: 100%;
    } */

/* #photosphere {
  height: 400px;
  width: 540px;
  margin: 0 auto;
} */
