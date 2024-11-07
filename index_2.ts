type Team = "red" | "blue" | "pink"
type Health = 1 | 5 | 10

// type Player = {
//     nickname : string,
//     team : Team
//     health : Health
// }

interface Player {
    nickname : string,
    team : Team
    health : Health
}

const nico : Player = {
    nickname: "nico",
    health: 5,
    team: "blue"
}