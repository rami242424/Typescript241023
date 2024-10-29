// type
type UUser = {
    name: string
}
type PPlayer = UUser & {

}

// interface
interface User {
    name: string
}
interface Player extends User{   
}

const nnico : PPlayer = {
    name: "nicoo"
}
const nico : Player = {
    name: "nico"
}

nico.name = "lalla"
nnico.name = "babab"