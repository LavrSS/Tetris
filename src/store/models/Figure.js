export default class Figure {
    constructor(data) {
        this.figureDotsList = this.getFigure()
    }

    getFigure() {
        return libOfFigures[Math.floor(Math.random() * libOfFigures.length)]
    }

    moveFigure() {
        this.figureDotsList.coords.map(coord => (console.log(coord)))
    }
}

const libOfFigures = [
    {
        index: 1,
        coords: [
            {x:3, y:20}, // *****
            {x:4, y:20},
            {x:5, y:20},
            {x:6, y:20},
            {x:7, y:20}
        ]
    },
    {
        index: 2,
        coords: [
            {x:4, y:19}, //   *
            {x:5, y:19}, // ****
            {x:6, y:19},
            {x:6, y:20},
            {x:7, y:19}
        ]
    },
    {
        index: 3,
        coords: [
            {x:4, y:19}, //    *
            {x:5, y:19}, // ****
            {x:6, y:19},
            {x:7, y:20},
            {x:7, y:19}
        ]
    },
    {
        index: 4,
        coords: [
            {x:5, y:18}, //   *
            {x:6, y:18}, //   *
            {x:7, y:18}, // ***
            {x:7, y:19},
            {x:7, y:20}
        ]
    },
    {
        index: 5,
        coords: [
            {x:5, y:19}, //  *
            {x:7, y:19}, // ***
            {x:6, y:19}, //  *
            {x:6, y:20},
            {x:6, y:18}
        ]
    },
    {
        index: 6,
        coords: [
            {x:5, y:19}, // * *
            {x:7, y:19}, // ***
            {x:6, y:19},
            {x:5, y:20},
            {x:7, y:20}
        ]
    },
    {
        index: 7,
        coords: [
            {x:6, y:20}, //  **
            {x:7, y:20}, // **
            {x:6, y:19}, //  *
            {x:5, y:19},
            {x:6, y:18}
        ]
    },
    {
        index: 8,
        coords: [
            {x:4, y:20}, // ***
            {x:5, y:20}, //   **
            {x:6, y:20},
            {x:6, y:19},
            {x:7, y:19}
        ]
    },
    {
        index: 9,
        coords: [
            {x:6, y:20}, //  **
            {x:7, y:20}, // ***
            {x:6, y:19},
            {x:5, y:19},
            {x:7, y:19}
        ]
    },
    {
        index: 10,
        coords: [
            {x:7, y:20}, //   *
            {x:5, y:19}, // ***
            {x:6, y:19}, // *
            {x:7, y:19},
            {x:5, y:18}
        ]
    },
    {
        index: 11,
        coords: [
            {x:6, y:20}, //  *
            {x:5, y:18}, //  *
            {x:6, y:19}, // ***
            {x:6, y:18},
            {x:7, y:18}
        ]
    },
    {
        index: 12,
        coords: [
            {x:5, y:20}, // *
            {x:5, y:19}, // **
            {x:6, y:19}, //  **
            {x:6, y:18},
            {x:7, y:18}
        ]
    },
]