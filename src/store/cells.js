import { defineStore } from 'pinia'
import {ref} from 'vue'
import Cell from '@/store/models/Cell.js'


export const useCells = defineStore('cell', () => {
    const cellList = ref([])
    const indexList = ref([])


    function startGame() {
        cellList.value = []
        indexList.value = []

        while(indexList.value.length < 480) {
            indexList.value.push(indexList.value.length)
            cellList.value.push(new Cell({index: indexList.value.length}))
        }
    }

    function createField(index) {
        let clearField = openInitialField(index)
        clearField.forEach(idx => {
            let index = indexList.value.findIndex(el => el === idx)
            indexList.value.splice(index, 1)
        })

        getBomb()
        getNumber()
    }

    function openInitialField(index) {
        let uniq = new Set()
        let count = getRandomIndex(1,4)
        let c = index
        while (count > 0) {
            getAroundIndex(c).forEach(el => uniq.add(el))
            let arr = [c + 1, c - 1, c + 30, c - 30]
            c = arr[getRandomIndex(0,4)]
            --count
        }
        let around = []
        for (let el of uniq) {
            getAroundIndex(el).forEach(idx => around.push(idx))
        }

        around.forEach(el => uniq.add(el))
        return [...uniq.keys()]
    }

    function getBomb() {
        let count = 99
        while (count > 0) {
            --count
            let i = getRandomIndex(1, indexList.value.length)
            let key = indexList.value[i]

            let randomBombIndex = cellList.value.find(cell => cell.index === key)
            randomBombIndex.putBomb()
            indexList.value.splice(i, 1)
        }
    }

    function getNumber() {
        cellList.value.forEach((cell) => {
            let count = 0
            let aroundCell = cell.neighbors
            aroundCell.forEach(idx => {
                let cell = cellList.value.find(cell => cell.index === idx)
                if (cell.isBomb) {
                    ++count
                }
            })
            cell.num = count
        })
    }

    function getAroundIndex(index){
        if(index % 30 === 0) {
            return [index - 30, index + 30, index + 29, index - 1, index - 31].filter(idx => idx >= 1 && idx <= 480)
        }
        if ((index - 1) % 30 === 0) {
            return [index - 30, index - 29, index + 1, index + 31, index + 30].filter(idx => idx >= 1 && idx <= 480)
        }
        return [index - 30, index - 29, index + 1, index + 31, index + 30, index + 29, index - 1, index - 31].filter(idx => idx >= 1 && idx <= 480)
    }

    function getRandomIndex(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return {
        cellList,
        indexList,
        startGame,
        createField
    }
})