<template>
    <div class="bg-amber-200 border rounded px-4 py-2 border-amber-600">
        Remain: {{ bombsCounter}}
    </div>
</template>

<script setup>
import { useCells } from '@/store/cells.js';
import {computed} from "vue";

const store = useCells()

const bombsCounter = computed(() => {
    return 99 - store.cellList.filter(cell => cell.flag).length
})


</script>

<style scoped>

</style>