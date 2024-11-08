type Player<E> = {
    name: string
    extraInfo: E
}

// 방법1
// type NicoPlayer = Player<{favFood:string}>

// const nico: Player<{favFood: string}> = {
//     name: "nico",
//     extraInfo: {
//         favFood: "kimchi"
//     }
// }

// 방법2
type NicoExtra = {favFood: string}
type NicoPlayer = Player<NicoExtra>
const nico: NicoPlayer = {
    name: "nico",
    extraInfo: {
        favFood: "kimchi"
    }
}
const lynn: Player<null> = {
    name: "lynn",
    extraInfo: null
}