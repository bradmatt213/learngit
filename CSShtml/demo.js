function Counter() {
    this.sum = 0;
    this.count = 0;
}

Counter.prototype.add = function (array) {
    array.forEach(function (entry) {
        this.sum += entry;
        ++this.count;
    }, this);
    //console.log(this);
};

var obj = new Counter();
obj.add([1, 3, 5, 7]);

console.log(obj.count);
console.log(obj.sum);