<template>
    <div class="w-[900px] h-[480px] bg-amber-400 flex flex-wrap">
        <Cell v-for="cell in cellList" :key="cell.index" :cell="cell"/>
    </div>
</template>

<script setup>
import Cell  from "@/components/Cell.vue";
import { useCells } from '@/store/cells.js'

const store = useCells()

const cellList = store.cellList

</script>

<style scoped>

</style>