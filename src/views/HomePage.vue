<template>
    <div class="h-screen w-full bg-gradient-to-b from-stone-100 to-amber-50 p-20 flex justify-center">
        <div class="space-y-10">
            <div v-if="cityData !== null" class="relative">
                <MoleculeCard :content="cityData" />
                <RouterLink to="/detalhes" class="absolute -bottom-5 w-full bg-stone-200 hover:bg-teal-400 p-2 rounded-b-lg text-sm text-center font-medium">
                    Ver histórico
                </RouterLink>
            </div>
            <div class="card" v-else>
                <AtomText textClass="card-title" textContent="Selecione uma cidade" />
            </div>
            <div class="flex gap-5">
                <AtomButton buttonClass="button" buttonContent="São Paulo" @buttonClick="callOpenWeatherMapApi" />
                <AtomButton buttonClass="button" buttonContent="Paris" @buttonClick="callOpenWeatherMapApi" />
                <AtomButton buttonClass="button" buttonContent="Buenos Aires" @buttonClick="callOpenWeatherMapApi" />
            </div>
        </div>
    </div>
</template>

<script>
import AtomButton from '../components/atom/AtomButton.vue';
import axios from 'axios'
import MoleculeCard from '../components/molecule/MoleculeCard.vue';
import { useCitiesStore } from '../stores/cities'
import AtomText from '../components/atom/AtomText.vue';

export default {
    components: { AtomButton, MoleculeCard, AtomText },
    data() {
        return {
            cityData: null
        }
    },
    methods: {
        callOpenWeatherMapApi(city) {
            let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_OPEN_WEATHER_API_KEY}`
            let citiesStore = useCitiesStore()
            
            axios.get(apiUrl).then(response => {
                let currentTemperature = Math.round(response.data.main.temp) + ' °C';
                let maxTemperature = Math.round(response.data.main.temp_max) + ' °C';
                let minTemperature = Math.round(response.data.main.temp_min) + ' °C';

                var cityData = {
                    city: response.data.name,
                    currentTemperature: currentTemperature,
                    maxTemperature: maxTemperature,
                    minTemperature: minTemperature,
                    iconTemperature: response.data.weather[0].icon
                }

                this.cityData = cityData
                citiesStore.addCity(cityData)
            })

        }
    }
}
</script>
