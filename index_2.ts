// abstract class (추상클래스) : 다른 클래스가 상속 받을 수 있는 클래스 -> 다른곳에서 상속받을 수만 있고, 직접적으로 새로운 인스턴스를 만들 수는 없다.
// 메소드 : 클래스 안에서 존재하는 함수 (추상메소드를 만들려면, 메소드를 클래스 안에서 구현하지 않으면 된다.-> 대신 call signature만 만들면 된다.)
// getFullName, getNickName : 추상메소드 -> 구현해야하는 메소드

abstract class User {
    constructor(
        protected firstName: string,
        protected lastName: string,
        protected nickName: string
    ) {}

    abstract getNickName():void

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}


class Player extends User {
    getNickName(): void {
        console.log(this.nickName)
    }
}

const nico = new Player("nico", "las", "니꼬");
nico.getFullName()


