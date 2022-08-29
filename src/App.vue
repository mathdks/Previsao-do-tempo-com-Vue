<template>
    <OrganismHeader />
    <RouterView />
</template>

<script>
import OrganismHeader from './components/organism/OrganismHeader.vue';

export default {
    components: { OrganismHeader }
}
</script>
