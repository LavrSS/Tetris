<template>
    <div class="bg-cyan-700 border-cyan-300 w-7 h-7 border"
         :class="{'bg-cyan-800': shadowFigure, 'bg-pink-600' : makePink}"
    >
    </div>
</template>

<script setup>
import {computed, ref, toRefs} from "vue";

const props = defineProps({
    cellID: Number,
})

import { useGame } from '@/store/game.js';
const game = useGame()

const makePink = computed(() => {
    let cell = game.cellList.find(el => el.index === props.cellID)
    return cell.isFigure
})

const shadowFigure = computed(() => {
    let cell = game.cellList.find(el => el.index === props.cellID)
    let figurePoint = game.actualFigure.figureDotsList.coords.find(el => el.x === cell.x)
    return  false
})

</script>

<style scoped>

</style>