<template>
    <div class="w-[900px] h-[480px] bg-amber-400 flex flex-wrap">
        <Cell v-for="cell in cellList" :key="cell.index" :cell="cell"/>
    </div>
    <button @click="start" class="absolute bottom-12 right-12 bg-amber-200 py-1 px-3 border rounded">START</button>
    <BombCounter class="absolute left-12 top-12"/>
</template>

<script setup>
import Cell  from "@/components/Cell.vue";
import BombCounter from "@/components/BombCounter.vue";
import { useCells } from '@/store/cells.js';
import {computed} from "vue";

const store = useCells()

const cellList = store.cellList


function start() {
    // console.log(bombsCounter.value)
    // store.startGame()
}
</script>

<style scoped>

</style>