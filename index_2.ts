// never : 함수가 절대 return하지 않을 때 발생

// Type 'string' is not assignable to type 'never'
function hello(): never{
    return "x"
} 