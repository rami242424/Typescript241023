type Player<E> = {
    name: string
    extraInfo: E
}

type NicoExtra = {
    favFood: string;
}
type NicoPlayer = Player<NicoExtra>

const nico : NicoPlayer = {
    name: "nico",
    extraInfo: {
        favFood: "hamburger"
    }
}

const lynn : Player<null> = {
    name: "lynn",
    extraInfo: null
}