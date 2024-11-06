// abstract class (추상클래스) : 다른 클래스가 상속 받을 수 있는 클래스 -> 다른곳에서 상속받을 수만 있고, 직접적으로 새로운 인스턴스를 만들 수는 없다.

abstract class User {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickName: string
    ) {}
}


class Player extends User {
}

const nico = new Player("nico", "las", "니꼬");


