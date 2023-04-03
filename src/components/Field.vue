<template>
    <div class="flex flex-col-reverse" ref="field">
        <div v-for="y in ySize" :key="y" class="flex">
            <VCell
                v-for="x in xSize"
                :key="y.toString() + x.toString()"
                :cellID="getCell(x,y)"
            />
        </div>
    </div>
</template>

<script setup>
import {ref, watch} from "vue";
import VCell from "./VCell.vue";
import Cell from "@/store/models/Cell.js"

const xSize = ref(10)
const ySize = ref(20)

import { useGame } from '@/store/game.js';
const game = useGame()

const figuresList = game.figuresList
watch(figuresList, () => {
    game.dropFigure()
})

function getCell(x,y) {
    const cell = new Cell({x, y});
    game.putCellFromCellList(cell)
    return cell.index
}


</script>

<style scoped>

</style>