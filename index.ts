// type : 원하는 모든 값이 될 수 있음
// interface : 오직 한가지 용도로만 사용 - 오브젝트의 모양을 특정해주기 위해 사용

type Team = "red" | "blue" | "yellow"
// type Team = string
type Health = 1 | 5 | 10
// type Health = number
// type Player = {
//     nickname : string
//     team : Team
//     health: Health
// }


interface Player {
    nickname : string
    team : Team
    health: Health
}
// interface Person = "nico"|"lynn" // X





const nico : Player = {
    nickname: "nico",
    team: "yellow",
    health: 10
}