<template>
    <figure :class="figureClass" @click="$emit('imageClick')">
        <img :src="imgPath" :alt="imgTextAlt" :class="imgClass">
    </figure>
</template>

<script>
export default {
    props: {
        figureClass: {
            type: String
        },
        imgPath: {
            type: String,
            required: true
        },
        imgTextAlt: {
            type: String,
            required: true
        },
        imgClass: {
            type: String
        }
    }
}
</script>
