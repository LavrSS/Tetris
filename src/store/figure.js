import {defineStore} from "pinia";
import {computed, reactive, ref} from 'vue'
import Figure from "./models/Figure.js";

export const useFigure = defineStore('figure', () => {
    const figure = reactive(new Figure());

    const getFigure = computed(() => figure.figureDotsList.coords)

    return {
        getFigure,
        figure
    }
})