// generic
type SuperPrint = {
    <TypePlaceHolder>(arr: TypePlaceHolder[]) : void
}

const superPrint : SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1,2,3,4])
superPrint([true, false, false])
superPrint(["string", "why"])
superPrint([1, false, "yay"])