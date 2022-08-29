<template>
    <p :class="textClass">{{textContent}}</p>
</template>

<script>
export default {
    props: {
        textClass: {
            type: String,
            default: ''
        },
        textContent: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>

</style>