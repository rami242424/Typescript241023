// never : 함수가 절대 return하지 않을 때 발생

// return 하지 않고 오류를 발생시키는 함수
function hello(): never{
    throw new Error("X")
} 