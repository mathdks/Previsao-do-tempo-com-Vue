<template>
    <div class="h-screen w-full bg-gradient-to-b from-stone-100 to-amber-50 p-20 space-y-5">
        <AtomLink 
            linkPage="/" 
            linkName="Voltar" 
            linkClass="bg-stone-200 hover:bg-rose-400 p-2 rounded-lg text-sm text-center font-medium" 
        />
        <OrganismGrid gridClass="gap-10" :items="returnCities" />
    </div>
</template>

<script>
import { useCitiesStore } from '../stores/cities';
import OrganismGrid from '../components/organism/OrganismGrid.vue';
import MoleculeCard from '../components/molecule/MoleculeCard.vue';
import AtomLink from '../components/atom/AtomLink.vue';

export default {
    components: { OrganismGrid, MoleculeCard, AtomLink },
    setup() {
        let citiesStore = useCitiesStore()
        let returnCities = citiesStore.citiesWeatherData
        return { returnCities }
    }
}
</script>
