type PlayerA = {
    name: string  
}

// type추가하기
type PlayerAA = PlayerA & {
    lastName: string
}

const playerA : PlayerAA = {
    name: "nico",
    lastName: "oh"
}

///////////////////////////////

interface PlayerB {
    name: string
}

// interface추가하기1
interface PlayerBB extends PlayerB {
    lastName: string
}

// interface추가하기2
interface PlayerBB {
    health: number
}

const playerB : PlayerBB = {
    name: "lynn",
    lastName: "kim",
    health: 29
}