import {defineStore} from "pinia";
import {computed, ref} from 'vue'
import Figure from "./models/Figure.js";
import { useFigure } from '@/store/figure.js';


export const useGame = defineStore('game', () => {

    const cellList = ref([]);
    const figuresList = ref([]);
    const figureOrder = ref([new Figure()])
    const counter = ref(0)

    const actualFigure = computed(() => figureOrder.value[0])
    const speedDrop = computed(() => {
        return 700 - (counter.value / 5) * 50 >= 50 ? 700 - (counter.value / 5) * 50 : 50
    })
    const checkCellsUnderFigure = computed(() => {
        let figureCoords = actualFigure.value.figureDotsList.coords
        if (figureCoords.find(item => item.y === 1)) {
            return true
        }
        let figureUnderCellsList = figureCoords.map(el => {
            return {
                x: el.x,
                y: el.y - 1
            }
        })

        figureUnderCellsList = figureUnderCellsList.filter(el => {
            return !figureCoords.find(item => item.x === el.x && item.y === el.y)
        })

        let findCellInCellList = figureUnderCellsList.map(el => {
            return cellList.value.find(item => el.x === item.x && el.y === item.y)
        })

        if (findCellInCellList.find(el => el.isFigure)) {
            return true
        }
        return false
    })

    function dropFigure() {
        figureOrder.value.push(new Figure())
        const figure = actualFigure.value
        if (anotherOne(figure)) {
            putFigureOnTable(figure)
            oneFigureDrop(figure)
        }
    }

    function anotherOne(figure) {
        const appearanceFields = figure.figureDotsList.coords.map(el => {
            return getCellByCoordinates(el.x, el.y)
        })
        return !appearanceFields.find(el => el.isFigure)
    }

    function oneFigureDrop(figure) {
        if (!checkCellsUnderFigure.value) {
            let ticker = setInterval(() => {
                if (!checkCellsUnderFigure.value) {
                    putFigureOnTable(figure)
                    figure.moveFigure()
                    putFigureOnTable(figure)
                }
                if (checkCellsUnderFigure.value) {
                    clearInterval(ticker)
                    checkFullLines()
                    figuresList.value.push(figure)
                    figureOrder.value.shift()
                }
            }, speedDrop.value)
        }
    }

    function moveRight() {
        putFigureOnTable(actualFigure.value)
        actualFigure.value.moveRight()
        putFigureOnTable(actualFigure.value)

    }

    function moveLeft() {
        putFigureOnTable(actualFigure.value)
        actualFigure.value.moveLeft()
        putFigureOnTable(actualFigure.value)
    }

    function moveDown() {
        if (!checkCellsUnderFigure.value) {
            putFigureOnTable(actualFigure.value)
            actualFigure.value.moveFigure()
            putFigureOnTable(actualFigure.value)
        }
    }

    function moveAround() {
        putFigureOnTable(actualFigure.value)
        const center = actualFigure.value.figureDotsList.coords[2]
        const cos = 0
        const sin = -1
        actualFigure.value.figureDotsList.coords.forEach(cell => {
            const x = cell.x - center.x
            const y = cell.y - center.y
            const newX = x * cos - y * sin + center.x
            const newY = x * sin + y * cos + center.y
            cell.x = newX
            cell.y = newY
        })
        putFigureOnTable(actualFigure.value)
    }

    function checkFullLines() {
        let lines = []
        for (let i = 1; i <= 20; i++) {
            lines.push(cellList.value.filter(el => el.y === i))
        }
        lines = lines.filter(line => {
            return !line.find(cell => !cell.isFigure)
        })
        if (lines.length) {
            let quantityLines = lines.length
            counter.value += quantityLines
            lines.forEach(line => {
                line.forEach(cell => cell.makeFigure())
            })
            blocksShiftDown(quantityLines)
        }
    }

    function blocksShiftDown(level) {
        while (level > 0) {
            cellList.value.forEach(cell => {
                if (cell.isFigure && cell.y > 1) {
                    let cellBottom = getCellByCoordinates(cell.x, cell.y - 1)
                    if (!cellBottom.isFigure) {
                        cell.makeFigure()
                        cellBottom.makeFigure()
                    }
                }
            })
            --level
        }
    }

    function putCellFromCellList(cell) {
        cellList.value.push(cell)
    }

    function putFigureOnTable(figure) {
        figure.figureDotsList.coords.forEach(el => {
            getCellByCoordinates(el.x, el.y).makeFigure()
        })
    }

    function getCellByCoordinates(x, y) {
        return cellList.value.find(item => item.x === x && item.y === y)
    }

    return {
        cellList,
        figuresList,
        counter,
        actualFigure,
        putCellFromCellList,
        dropFigure,
        moveRight,
        moveLeft,
        moveDown,
        moveAround
    }
})

