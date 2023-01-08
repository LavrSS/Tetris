<template>
 <div
     @click="open"
     @click.right="flag"
     oncontextmenu="return false;"
     class="w-[30px] h-[30px] border border-amber-600 hover:cursor-pointer backdrop-brightness-5 hover:backdrop-brightness-125 flex items-center justify-center">
     <div v-if="cell.isOpen">
         <fa icon="bomb" v-if="cell.isBomb"/>
         <p v-else>{{cell.num === 0 ? '' : cell.num }}</p>
     </div>
     <div v-if="cell.flag">
         <fa icon="flag" />
     </div>
 </div>
</template>

<script setup>

const props = defineProps({
    cell: Object,
})

const cell = props.cell

import { useCells } from '@/store/cells.js'
const store = useCells()


function open() {
   if(!cell.flag) {
       if (cell.num == 0) {
           // const aroundCells = store.getAroundIndex(cell.index)
           // console.log(aroundCells)
           // aroundCells.forEach(cell => cell.open())
       } else {
           cell.openCell()
       }
   }
}

function flag() {
    if(!cell.isOpen) {
        cell.putFlag()
    }
}
</script>

<style scoped>

</style>