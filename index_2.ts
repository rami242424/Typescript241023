type Player<E> = {
    name: string
    extraInfo: E
}

const nico : Player<{favFood:string}> = {
    name: "nico",
    extraInfo: {
        favFood: "hamburger"
    }
}