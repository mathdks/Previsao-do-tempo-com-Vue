<template>
    <header class="header" :class="headerColor">
        <AtomLogo/>
    </header>
</template>

<script>
import AtomLogo from '../atom/AtomLogo.vue';

export default {
    components: { AtomLogo },
    props:{
        headerColor: {
            type: String,
            default: null
        }
    }
}
</script>
