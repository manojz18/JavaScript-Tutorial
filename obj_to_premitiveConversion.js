

let user = {
    name: "Manoj Zagade",
    money: 1000,

    [Symbol.toPrimitive](hint){
        console.log("Hint: ", hint);
        return hint == 'string' ? `Hello ${name}` : this.money;
    }
};

console.log(user+150);
console.log(user+"motto");