type Age = number;
type Name = string;
type Player = {
    name: Name
    age?: Age
}

// function playerMaker(name: string, age: number){
//     return {
//         name,
//         age
//     }
// }
// 화살표함수
const playerMaker(name:string, age:number) => ({
    name,
    age
})

const nico = playerMaker("nico", 12)
nico.age = 20
