class Block {
    constructor(index, previousHash, timestamp, data, hash) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash;
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "0", Date.now(), "Genesis Block", "fake-hash");
    }

    addBlock(data) {
        const previousBlock = this.chain[this.chain.length - 1];
        const newBlock = new Block(
            previousBlock.index + 1,
            previousBlock.hash,
            Date.now(),
            data,
            "fake-hash"
        );
        this.chain.push(newBlock);
    }
}

// Example usage
const blockchain = new Blockchain();
blockchain.addBlock({ amount: 10, sender: "Alice", receiver: "Bob" });
blockchain.addBlock({ amount: 20, sender: "Bob", receiver: "Charlie" });

console.log(blockchain.chain);
