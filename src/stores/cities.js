import { defineStore } from 'pinia'

export const useCitiesStore = defineStore({
    id: 'cities',
    state: () => ({
        citiesWeatherData: [],
    }),
    actions: {
        addCity(content) {
            this.citiesWeatherData.push(content)
        }
    }
})
