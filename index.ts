type Name = string;
type age = number;
type Player = {
    name : Name,
    age? : age
}

function playerMaker(name:string) : Player {
    return {
        name,
    }
}

const nico = playerMaker("nico")
nico.age = 12