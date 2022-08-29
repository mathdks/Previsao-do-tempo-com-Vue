<template>
    <router-link 
        v-if="linkPage !== null && linkType === 'intern'" 
        :to="linkPage"
        :class="linkClass"
    >
        <slot/>
        {{linkName}}
    </router-link>
    <a 
        v-else-if="linkPage !== null && linkType === 'extern'"
        :href="linkPage" 
        target="_blank"
        :class="linkClass"
    >
        <slot/>
        {{linkName}}
    </a>
    <button v-else class="mr-button-danger" @click="router.back()">
        Voltar
    </button>
</template>

<script>
export default {
    props: {
        linkPage: {
            type: String,
            default: null
        },
        linkType: {
            type: String,
            default: 'intern'
        },
        linkName: {
            type: String,
            default: 'Link'
        },
        linkClass: {
            type: String,
            default: 'mr-button'
        }
        
    }
}
</script>
