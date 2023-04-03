export default class Figure {
    constructor(data) {
        this.figureDotsList = this.getFigure()
    }

    getFigure() {
        return JSON.parse(JSON.stringify(libOfFigures[Math.floor(Math.random() * libOfFigures.length)]))
    }

    moveFigure() {
        this.figureDotsList.coords.map(coord => --coord.y)
    }

    moveRight() {
        if (!this.figureDotsList.coords.find(el => el.x >= 10)) {
            this.figureDotsList.coords.map(coord => ++coord.x)
        }
    }

    moveLeft() {
        if (!this.figureDotsList.coords.find(el => el.x <= 1)) {
            this.figureDotsList.coords.map(coord => --coord.x)
        }
    }
}

const libOfFigures = [
    {
        coords: [
            {x:3, y:20}, // *****
            {x:4, y:20},
            {x:5, y:20},
            {x:6, y:20},
            {x:7, y:20}
        ]
    },
    {
        coords: [
            {x:3, y:20}, // *****
            {x:4, y:20},
            {x:5, y:20},
            {x:6, y:20},
            {x:7, y:20}
        ]
    },
    {
        coords: [
            {x:3, y:20}, // *****
            {x:4, y:20},
            {x:5, y:20},
            {x:6, y:20},
            {x:7, y:20}
        ]
    },
    {
        coords: [
            {x:4, y:19}, //   *
            {x:5, y:19}, // ****
            {x:6, y:19},
            {x:6, y:20},
            {x:7, y:19}
        ]
    },
    {
        coords: [
            {x:4, y:20}, // ****
            {x:5, y:20}, //   *
            {x:6, y:20},
            {x:6, y:19},
            {x:7, y:20}
        ]
    },
    {
        coords: [
            {x:4, y:19}, //    *
            {x:5, y:19}, // ****
            {x:6, y:19},
            {x:7, y:20},
            {x:7, y:19}
        ]
    },
    {
        coords: [
            {x:4, y:20}, // ****
            {x:5, y:20}, //    *
            {x:6, y:20},
            {x:7, y:19},
            {x:7, y:20}
        ]
    },
    {
        coords: [
            {x:5, y:18}, //   *
            {x:6, y:18}, //   *
            {x:7, y:18}, // ***
            {x:7, y:19},
            {x:7, y:20}
        ]
    },
    {
        coords: [
            {x:5, y:19}, //  *
            {x:7, y:19}, // ***
            {x:6, y:19}, //  *
            {x:6, y:20},
            {x:6, y:18}
        ]
    },
    {
        coords: [
            {x:5, y:19}, // * *
            {x:7, y:19}, // ***
            {x:6, y:19},
            {x:5, y:20},
            {x:7, y:20}
        ]
    },
    {
        coords: [
            {x:6, y:20}, //  **
            {x:7, y:20}, // **
            {x:6, y:19}, //  *
            {x:5, y:19},
            {x:6, y:18}
        ]
    },
    {
        coords: [
            {x:6, y:20}, // **
            {x:5, y:20}, //  **
            {x:6, y:19}, //  *
            {x:7, y:19},
            {x:6, y:18}
        ]
    },
    {
        coords: [
            {x:4, y:20}, // ***
            {x:5, y:20}, //   **
            {x:6, y:20},
            {x:6, y:19},
            {x:7, y:19}
        ]
    },
    {
        coords: [
            {x:4, y:19}, //   **
            {x:5, y:19}, // ***
            {x:6, y:19},
            {x:6, y:20},
            {x:7, y:20}
        ]
    },
    {
        coords: [
            {x:6, y:20}, //  **
            {x:7, y:20}, // ***
            {x:6, y:19},
            {x:5, y:19},
            {x:7, y:19}
        ]
    },
    {
        coords: [
            {x:5, y:20}, // ***
            {x:6, y:20}, //  **
            {x:7, y:20},
            {x:6, y:19},
            {x:7, y:19}
        ]
    },
    {
        coords: [
            {x:7, y:20}, //   *
            {x:5, y:19}, // ***
            {x:6, y:19}, // *
            {x:7, y:19},
            {x:5, y:18}
        ]
    },
    {
        coords: [
            {x:5, y:20}, // *
            {x:5, y:19}, // ***
            {x:6, y:19}, //   *
            {x:7, y:19},
            {x:7, y:18}
        ]
    },
    {
        coords: [
            {x:6, y:20}, //  *
            {x:5, y:18}, //  *
            {x:6, y:19}, // ***
            {x:6, y:18},
            {x:7, y:18}
        ]
    },
    {
        coords: [
            {x:5, y:20}, // *
            {x:5, y:19}, // **
            {x:6, y:19}, //  **
            {x:6, y:18},
            {x:7, y:18}
        ]
    },
    {
        coords: [
            {x:7, y:20}, //   *
            {x:6, y:19}, //  **
            {x:7, y:19}, // **
            {x:5, y:18},
            {x:6, y:18}
        ]
    },
]