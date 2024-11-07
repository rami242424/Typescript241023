// type version
type User = {
    name: string
}
type Player = User & {
}

// interface version
// interface User {
//     name: string
// }

// interface Player extends User {
// }

const nico : Player = {
    name: "nico"
}