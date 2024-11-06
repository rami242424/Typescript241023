// type SuperPrint = {
//     <T, M>(a: T[], b: M): T
// }
// const superPrint: SuperPrint = (arr) => arr[0]

// 위코드 통합가능(아래와 같이)
function superPrint<V, T>(a: V[], b: T){
    return a[0]
}

const a = superPrint([1,2,3,4], true)
const b = superPrint([true, false, false], 2)
const c = superPrint([false, true, 2, "yay", 4], "wow")
