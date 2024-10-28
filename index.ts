// generic
type SuperPrint = {
    <TypePlaceHolder>(arr: TypePlaceHolder[]) : TypePlaceHolder
}

const superPrint : SuperPrint = (arr) => arr[0]

const a = superPrint([1,2,3,4])
const b = superPrint([true, false, false])
const c = superPrint(["string", "why"])
const d = superPrint([1, false, "yay"])