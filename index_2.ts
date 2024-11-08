// call signature - shortcut
type Add = (a:number, b:number) => number;

// call signature - long way
type Add = {
    (a:number, b:number) : number
}

const add : Add = (a, b) => a + b 

// 오버로딩 : 서로 다른 여러개의 call signature을 가졌을 때 발생
