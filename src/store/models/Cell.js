let counter  = 0

export default class Cell {
    constructor(data) {
        this.index = counter++
        this.x = data.x
        this.y = data.y
        this.isFigure = false
    }

    makeFigure() {
        console.log(this.index)
        this.isFigure = !this.isFigure
    }
}