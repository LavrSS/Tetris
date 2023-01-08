import { defineStore } from 'pinia'
import {ref} from 'vue'
import Cell from '@/store/models/Cell.js'


export const useCells = defineStore('counter', () => {
    const cellList = ref([])

    const indexList = ref([])
    while(indexList.value.length < 480) {
        indexList.value.push(indexList.value.length)
        cellList.value.push(new Cell({index: indexList.value.length}))
    }


    while (indexList.value.length > 389) {
        let random = getRandomIndex()
        if (random < 480) {
            let el = cellList.value.find(el => el.index === random)
            el.putBomb()
            indexList.value.splice(random, 1)
        }
    }

    cellList.value.forEach((cell) => {
        let count = 0
        let aroundCell = cell.neighbors()
        aroundCell.forEach(idx => {
            let cell = cellList.value.find(cell => cell.index === idx)
            if (cell.isBomb) {
                ++count
            }
        })
        cell.num = count
    })


    function getRandomIndex() {
        return Math.abs(480 - Math.floor(Math.random() * 1000))
    }

    function getAroundIndex(index) {
        if(index % 30 === 0) {
            return [index - 30, index + 30, index + 29, index - 1, index - 31].filter(idx => idx >= 1 && idx <= 480)
        }
        if ((index - 1) % 30 === 0) {
            return [index - 30, index - 29, index + 1, index + 31, index + 30].filter(idx => idx >= 1 && idx <= 480)
        }
        return [index - 30, index - 29, index + 1, index + 31, index + 30, index + 29, index - 1, index - 31].filter(idx => idx >= 1 && idx <= 480)

    }

    return {
        cellList,
        indexList,
        getAroundIndex
    }
})