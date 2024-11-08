type SuperPrint = {
    <T>(arr: T[]) : T
}

const superPrint: SuperPrint = (arr) => arr[0]

const a = superPrint([1,2,3])
const b = superPrint([false, false, true])
const c = superPrint(["yay", "wow", true])
const d = superPrint([1,2,3, true, "yay", 2])