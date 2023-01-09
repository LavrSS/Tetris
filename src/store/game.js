import {defineStore, mapState} from "pinia";
import {ref} from 'vue'


export const useGame = defineStore('game', () => {

    const step = ref('start')


    function nextStep() {
        if (step.value === 'start') {
            return step.value = 'game'
        }
    }
    return {
        step,
        nextStep
    }
})