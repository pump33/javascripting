function Person(name, age) {
    this.name = name;
    this.age = age;
    this.toString = function() {
        return (this.name + " / " + this.age);
    }
};

var p1 = new Person("Suzuki", 26);

console.log(p1.name);
console.log(p1.age);
console.log(p1.toString());
