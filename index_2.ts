type SuperPrint = {
    <T, M>(a: T[], b:M) : T
}

const superPrint: SuperPrint = (arr) => arr[0]

const a = superPrint([1,2,3], 3)
const b = superPrint([false, false, true],  "yay")
const c = superPrint(["yay", "wow"], "wow")
const d = superPrint([1,2,3, true, "yay", 2], true)

c.toUpperCase();