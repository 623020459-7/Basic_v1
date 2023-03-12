<template>
    <b-col md="4">
        <b-card img-alt="image" img-top tag="article" style="max-width: 20rem;" class="mb-2" :img-src=image>
            <b-card-text>
                {{ title }}
                {{ content }}
                {{ location }}
                <!-- {{ image }} -->
            </b-card-text>

        </b-card>
    </b-col>
</template>
<script >
import axios from 'axios';
const url = 'http://localhost:8000/api/performance';

export default {
    props: {
        id: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false
        },
        location: {
            type: String,
            required: true
        }
    },
}
</script>