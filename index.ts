type PlayerA = {
    firstName : string
}

interface PlayerB {
    firstName : string
}

class UserA implements PlayerA {
    constructor(
        public firstName: string
    ){}
}
class UserB implements PlayerB {
    constructor(
        public firstName: string
    ){}
}