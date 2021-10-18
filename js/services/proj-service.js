var gProjs = [{
        id: "mineSweeper",
        name: "Mine Sweeper",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1,
        labels: ["Matrixes", "keyboard events"],
        img: '01',
        link: 'https://yaakovmargalit.github.io/Minesweeper/'
    },
    {
        id: "touchNums",
        name: "Touch Nums",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1,
        labels: ["Matrixes", "keyboard events"],
        img: '02'
    },
    {
        id: "ballBoard",
        name: "Ball Board",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1,
        labels: ["Matrixes", "keyboard events"],
        img: '03'
    }
]

function getProtfolio() {
    return gProjs
}

function getProjById(projId) {
    return gProjs.find((proj) => proj.id === projId)
}