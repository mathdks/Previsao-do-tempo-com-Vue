<template>
    <div :class="gridClasses" v-if="gridType === 'front'">
        <component 
            :is="cardTag" 
            v-for="item in items" :key="item + Math.random()"
            :content="item"
        />
    </div>
    <div :class="gridClasses" v-else>
        <slot />
    </div>
</template>

<script>
import MoleculeCard from '../molecule/MoleculeCard.vue';

export default {
    components: { MoleculeCard },
    props: {
        gridType: {
            type: String,
            default: 'front'
        },
        gridClass: {
            type: String,
            default: ''
        },
        cardTag: {
            type: String,
            default: 'MoleculeCard'
        },
        items: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        gridClasses() {
            return `grid lg:grid-cols-3 gap-5 w-full place-items-center items-start ${this.gridClass}`
        }
    }
}
</script>
