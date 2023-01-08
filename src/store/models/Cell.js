export default class Cell {
    constructor(data) {
        this.index = data.index
        this.isBomb = false
        this.num = null
        this.isOpen = false
        this.flag = false
        this.neighbors = () => {
            const index = this.index
            if(index % 30 === 0) {
                return [index - 30, index + 30, index + 29, index - 1, index - 31].filter(idx => idx >= 1 && idx <= 480)
            }
            if ((index - 1) % 30 === 0) {
                return [index - 30, index - 29, index + 1, index + 31, index + 30].filter(idx => idx >= 1 && idx <= 480)
            }
            return [index - 30, index - 29, index + 1, index + 31, index + 30, index + 29, index - 1, index - 31].filter(idx => idx >= 1 && idx <= 480)

        }
    }

    putBomb(){
        this.isBomb = true
    }

    putNumber(num) {
        this.num = num
    }

    openCell() {
        this.isOpen = true
    }

    putFlag() {
        this.flag = !this.flag
    }


}