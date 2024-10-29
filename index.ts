// generic 이론
// type SuperPrint = <T, M>(a: T[], b: M) => T

// const superPrint : SuperPrint = (arr) => arr[0]

// const a = superPrint([1,2,3,4], "x")
// const b = superPrint([true, false, false], [8])
// const c = superPrint(["string", "why"], true)
// const d = superPrint([1, false, "yay"], ["stringtoo", "stringone"])

// generic의 실제사용방식
function superPrint<T>(a: T[]){
    return a[0]
}

const a = superPrint<number>([1,2,3,4])
const b = superPrint([true, false, false])
const c = superPrint(["string", "why"])
const d = superPrint([1, false, "yay"])