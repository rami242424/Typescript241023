// import crypto from "crypto";

// interface BlockShape {
//     hash : string;
//     prevHash : string;
//     height : number;
//     data: string;
// }

// class Block implements BlockShape{
//     public hash: string;
//     constructor(
//         public prevHash: string,
//         public height : number,
//         public data : string
//     ){
//         this.hash = Block.calculateHash(prevHash, height, data);
//     }
//     static calculateHash(prevHash:string, height:number, data:string){
//     const toHash = `${prevHash}${height}${data}`
//     return crypto.createHash("sha256").update(toHash).digest("hex")
//     }
// }

// class BlockChain {
//     private blocks: Block[]
//     constructor(){
//         this.blocks = [];
//     }
//     private getPrevHash(){
//         if(this.blocks.length === 0) return ""
//         return this.blocks[this.blocks.length - 1].hash;
//     }
//     public addBlock(data:string){
//         const newBlock = new Block(
//             this.getPrevHash(), 
//             this.blocks.length + 1, 
//             data
//         );
//         this.blocks.push(newBlock);
//     }
//     public getBlocks(){
//         return [...this.blocks]
//     }
// }

// const blockchain = new BlockChain();

// blockchain.addBlock("first one");
// blockchain.addBlock("second one");
// blockchain.addBlock("third one");

// blockchain.getBlocks().push(new Block("wow", 0, "hacked"))
// console.log(blockchain.getBlocks());

import crypto from "crypto";

interface BlockShape{
    hash:string;
    prevHash: string;
    height: number;
    data: string;
}

class Block implements BlockShape{
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ){
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash:string, height:number, data:string){
        const toHash = `${prevHash}${height}${data}`
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}

class Blockchain {
    private blocks: Block[]
    constructor(){
        this.blocks = [];
    }
    private getPrevHash(){
        if(this.blocks.length === 0) return "";
        return this.blocks[this.blocks.length - 1].hash;
    }
    public addBlock(data:string){
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data)
        this.blocks.push(newBlock);
    }
    public getBlocks(){
        // return this.blocks; // 해킹될수있다.
        return [...this.blocks];
    }
}

const blockchain = new Blockchain();

blockchain.addBlock("first one");
blockchain.addBlock("second one");
blockchain.addBlock("third one");

blockchain.getBlocks().push(new Block("yay", 454645465, "i got this")) // return this.blocks; 코드를 짜면 이렇게 해킹가능

console.log(blockchain.getBlocks());