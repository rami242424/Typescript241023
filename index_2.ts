// overloading : 함수가 여러개의 call signature을 가지고 있을 때 발생
type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string): void
    (config: Config): void
}

const push: Push = (config) => {
    if(typeof config === "string") { console.log(config) }
    else {
        console.log(config.path)
    }
}