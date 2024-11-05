// never : 함수가 절대 return하지 않을 때 발생
// else문은 절대 실행되지 않아야 한다.

function hello(name:string|number): never{
    if(typeof name === "string"){
        name + "string"
    } else if(typeof name === "number"){
        name + 1
    } else {
        name //(parameter) name: never)
    }
} 