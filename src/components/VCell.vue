<template>
    <div class="bg-cyan-700 border-cyan-300 w-6 h-6 border"
         :class="{'bg-pink-600' : makePink}"
    >
<!--        {{cell}}-->
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

// const makePink = computed(() => {
//     console.log(cell.isFigure)
//     return cell.isFigure
// })
</script>

<style scoped>

</style>