import {defineStore, mapState} from "pinia";
import {ref} from 'vue'
import Figure from "./models/Figure.js";


export const useGame = defineStore('game', () => {

    const cellList = ref([]);

    const figure = new Figure();
    console.log(figure.figureDotsList)

    function startGame() {
        putFigureOnTable(figure.figureDotsList.coords)
    }

    function putCellFromCellList(cell) {
        cellList.value.push(cell)
    }

    function putFigureOnTable(figureCoords) {
        figureCoords.forEach(el => {
            let searchCell = cellList.value.find(item => item.x === el.x && item.y === el.y)
            searchCell.makeFigure()
        })
    }


    return {
        cellList,
        startGame,
        putCellFromCellList
    }
})

