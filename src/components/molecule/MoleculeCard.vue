<template>
    <div class="card relative">
        <div class="card-title">
            <AtomTitle titleTag="h2" :titleContent="content.city" />
            <AtomImage 
                :imgPath="`http://openweathermap.org/img/w/${content.iconTemperature}.png`" 
                :imgTextAlt="`Previsão do tempo para ${content.city}`"
            />
        </div>
        <div class="card-details">
            <AtomText textContent="Agora" />
            <AtomText textClass="card-details-highlight" :textContent="content.currentTemperature" />
        </div>
        <div class="card-details">
            <AtomText textContent="Máxima" />
            <AtomText textClass="card-details-highlight" :textContent="content.maxTemperature" />
        </div>
        <div class="card-details">
            <AtomText textContent="Mínima" />
            <AtomText textClass="card-details-highlight" :textContent="content.minTemperature" />
        </div>
    </div>
</template>

<script>
import AtomTitle from '../atom/AtomTitle.vue';
import AtomImage from '../atom/AtomImage.vue';
import AtomText from '../atom/AtomText.vue';
export default {
    components: { AtomTitle, AtomImage, AtomText },
    props: {
        content: {
            type: Object
        }
    }
}
</script>
