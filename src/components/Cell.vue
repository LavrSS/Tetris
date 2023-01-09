<template>
 <div
     @click="open(cell)"
     @click.right="flag"
     @mousedown="showNeighbors"
     @mouseup="openNeighbors"
     oncontextmenu="return false;"
     class="w-[30px] h-[30px] border border-amber-700 hover:cursor-pointer backdrop-brightness-5 hover:backdrop-brightness-125 flex items-center justify-center"
     :class="{'bg-amber-500' : cell.isOpen, 'bg-amber-600' : cell.isNeighbor}"
 >
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
import { computed } from "vue";

const props = defineProps({
    cell: Object,
})
const emit = defineEmits(['lose'])

const cell = props.cell

import { useCells } from '@/store/cells.js'
const store = useCells()


const neighbors = computed(() => {
    return cell.neighbors.map(idx => {
        return store.cellList.find(cell => cell.index === idx)
    })
})

import { useGame } from '@/store/game.js';
const game = useGame()


function open(cell) {
    if(game.step === 'start'){
        store.createField(cell.index)
        game.nextStep()
        open(cell)
    }

   if (!cell.isOpen) {
       if(!cell.flag) {
           cell.openCell()
           if (cell.num == 0 && !cell.isBomb) {
               cell.neighbors.forEach(idx => {
                   let neighbor = store.cellList.find(cell => cell.index === idx)
                   open(neighbor)
               })
           }
           if(cell.isBomb) {
               emit('lose')
           }
       }
   }
}

function showNeighbors() {
    if (cell.isOpen && cell.num) {
        neighbors.value.forEach(neighbor => {
            if (!neighbor.isOpen && !neighbor.flag) {
                neighbor.getNeighbor()
            }
        })

    }
}

function openNeighbors() {
    showNeighbors()
    if (cell.isOpen && cell.num) {
        if (neighbors.value.filter(el => el.flag).length === cell.num) {
            neighbors.value.forEach(neighbor => {
                open(neighbor)
            })
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