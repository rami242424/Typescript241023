// 기본적인 type 사용방법(obj 형식)
// type Player = {
//     nickname: string,
//     healthBar: number
// }

// const nico : Player = {
//  nickname: "nico",
//  healthBar: 10
// }

// type의 다른 사용방법(타입 alias 대체명 형식)
type Food = string;
const kimchi : Food = "delicious"


//
type Nickname = string;
type HealthBar = number;
type Friends = Array<string>
type Player = {
    nickname : Nickname,
    healthBar : HealthBar
}