<template>
    <component :is="titleTag" @click="$emit('titleClick')">
        {{titleContent}}
    </component>
</template>

<script>
export default {
    props: {
        titleTag: {
            type: String,
            default: 'h1'
        },
        titleContent: {
            type: String,
            default: 'Title'
        }
    }
}
</script>
