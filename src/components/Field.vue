<template>
    <div class="w-[900px] h-[480px] bg-amber-400 flex flex-wrap">
        <Cell v-for="cell in cells.cellList" :key="cell.index" :cell="cell" @lose="endGame"/>
    </div>
    <button @click="start" class="absolute bottom-12 right-12 bg-amber-200 py-1 px-3 border rounded">START</button>
    <BombCounter class="absolute left-12 top-12"/>
    <Alert v-if="end"/>
</template>

<script setup>
import Cell  from "@/components/Cell.vue";
import BombCounter from "@/components/BombCounter.vue";
import { useCells } from '@/store/cells.js';
import { useGame } from '@/store/game.js';
import {ref} from "vue";
import Alert from "@/components/Alert.vue";

const cells = useCells()
const game = useGame()

const end = ref(false)

function endGame() {
    end.value = true
}

function start() {
    cells.startGame()
}
</script>

<style scoped>

</style>