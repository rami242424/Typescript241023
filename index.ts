// interface : 원하는 메소드와 프로퍼티를 클래스가 가지도록 강제할 수 있게 하는 것 but 자바스크립트로 컴파일 되지 않음!
// 즉, 추상 클래스와 비슷한 보호를 제공하지만, 인터페이스는 자바스크립트 파일에서 보이지 않는다.(추상클래스를 쓰면, 자바스크립트에서는 일반적인 클래스로 바뀐다. -> 파일 크기가 좀 더 커지고, 추가 클래스가 만들어진다는 뜻)

// type 방법1
type PPlayer = {
}
// type 방법2
type PPPlayer = string
// type 방법3
type PPPPlayer = "yay" | "wow"

// --------------------------------
type PlayerA = {
    name: string
}
type PlayerAA = PlayerA & {
    lastName: string
}
const playerA: PlayerAA = {
    name : "nico",
    lastName : "oh"
}

// --------------------------------
interface PlayerB {
    name: string
}
interface PlayerB {
    lastName : string
}
interface PlayerB {
    health : number
}
const playerB: PlayerB = {
    name: "lynn",
    lastName: "ye",
    health: 10
}
