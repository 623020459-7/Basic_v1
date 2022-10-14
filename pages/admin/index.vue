<template>
     <div id="photosphere" style="width: 80%; height: 700px; margin-left: 150px; margin-top: 50px">
    <!-- <div class="container">
        <div class="card-body text-center">
            <a href="index.html" class="btn btn-primary">กลับหน้าหลัก</a>
        </div>
    </div> -->
    <!-- <div id="home" class="text-center p-5">
        <a href="Welpj.html" class="btn btn btn-outline-success m-1">Home</a>
    </div> -->
    <nuxt-link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/photo-sphere-viewer@4/dist/photo-sphere-viewer.min.css" ></nuxt-link>
    <nuxt-link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/photo-sphere-viewer@4/dist/plugins/markers.min.css" ></nuxt-link>

</div>
<!-- <div>
    <nuxt-link to="/admin/posts" class="btn btn-primary">ดูบทความ</nuxt-link>
    <nuxt-link to="/admin/posts/create" class="btn btn-success">เขียนบทความ</nuxt-link>
</div> -->

</template>
<script>

<script  src="https://cdn.jsdelivr.net/npm/photo-sphere-viewer@4/dist/photo-sphere-viewer.min.js"></script>
<script  src="https://cdn.jsdelivr.net/npm/photo-sphere-viewer@4/dist/plugins/virtual-tour.js"></script>
<script  src="https://cdn.jsdelivr.net/npm/photo-sphere-viewer@4/dist/plugins/markers.min.js"></script>
var viewer = new PhotoSphereViewer.Viewer({
            container: document.querySelector("#photosphere"),
            panorama: 'No2.jpg',
            loadingImg:
                "https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif",
            touchmoveTwoFingers: true,
            mousewheelCtrlKey: true,
            caption: "360 Virtual of KKU Arts & Culture Center",
            defaultLong: "100deg",
            plugins: [
                [
                    PhotoSphereViewer.MarkersPlugin,
                    {
                        hideButton: false,
                        listButton: false,
                    },
                ],
                [
                    PhotoSphereViewer.VirtualTourPlugin,
                    {
                        positionMode: PhotoSphereViewer.VirtualTourPlugin.MODE_GPS,
                        renderMode: PhotoSphereViewer.VirtualTourPlugin.MODE_3D,
                    },
                ],
            ],
        });

    
</script>
<style>
    #photosphere {
        margin: 0;
        width: 100%;
        height: 100%;
    }
</style>
