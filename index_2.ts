interface User {
    firstName: string,  
    lastName: string
    sayHi(name: string): string
    fullName(): string
}

// 추가
interface Human {
    health: number
}

class Player implements User {
    constructor(
        public firstName:string,
        public lastName: string,
        public health: number
    ){}
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string){
        return `Hello ${name}. My name is ${this.firstName}`
    }
}