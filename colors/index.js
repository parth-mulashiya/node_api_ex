class Color{
    constructor(name,code){
        this.name = name
        this.code = code
    }
}

const allColors = [
    new Color('brighted', '#E74C3C'),
    new Color('soothingpurple', '#9B59B6'),
    new Color('skyblue', '#5DADE8'),
    new Color('leafygreen', '#48C980'),
    new Color('sunkissedyellow', '#F4D03F'),
    new Color('groovygray', '#D7DBDD'),
]


exports.getRandomColor = () => {
    return allColors[Math.floor(Math.random() * allColors.length)]
}

exports.allColors = allColors