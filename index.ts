// generic 이론
// type SuperPrint = <T, M>(a: T[], b: M) => T

// const superPrint : SuperPrint = (arr) => arr[0]

// const a = superPrint([1,2,3,4], "x")
// const b = superPrint([true, false, false], [8])
// const c = superPrint(["string", "why"], true)
// const d = superPrint([1, false, "yay"], ["stringtoo", "stringone"])

// generic의 실제사용방식1
// function superPrint<T>(a: T[]){
//     return a[0]
// }

// const a = superPrint<number>([1,2,3,4])
// const b = superPrint([true, false, false])
// const c = superPrint(["string", "why"])
// const d = superPrint([1, false, "yay"])

// generic의 실제사용방식2
type Player<E> = {
    name: string
    extraInfo: E
}

// 아래 3개의 코드는 다 같다.
type NicoExtra = {
    favFood : string;
}
// type NicoPlayer = Player<{favFood:string}> 또는 위에 코드 사용해서 아래와 같이 표현할 수 있다.
type NicoPlayer = Player<NicoExtra>

const nico : Player<{favFood:string}> = {
    name: "nico",
    extraInfo: {
        favFood: "kimchi"
    }
}

const lynn: Player<null> = {
    name: "lynn",
    extraInfo: null
}