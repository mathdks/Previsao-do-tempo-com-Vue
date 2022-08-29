<template>
    <button :type="buttonType" :class="buttonClass" @click="$emit('buttonClick', buttonContent)">
        <span>
            {{buttonContent}}
        </span>
    </button>
</template>

<script>
export default {
    props: {
        buttonType: {
            type: String,
            default: 'button'
        },
        buttonClass: {
            type: String,
            default: 'mr-button'
        },
        buttonContent: {
            type: String,
            default: 'Button'
        }
    }
}
</script>
