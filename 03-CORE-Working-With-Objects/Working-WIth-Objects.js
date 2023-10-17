//User Story 1
let x = {y: {z: 42}};

console.log("*=",x.y.z);

//User Story 2
let v = {
    v: function () {
        return {
            v: 42
        };
    }
};

console.log("42=",v.v().v);

//User Story 3
function numberMembers(obj) {
    return Object.keys(obj).length;
}

console.log("Number of Members:",numberMembers({
    1: 1, 2: 2, 3: 3, 4: function () {
        return {a: 2};
    }
}));

//User Story 4
function equals(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length){
        return false;
    }
    for (let key of keys1) {
        if (!keys2.includes(key)) {
            return false;
        }
    }
    return true;
}

let obj1 = {1: "a", 2: "b", 3: "c", 4: "d", 5: "e"};
let obj2 = {2: "b", 1: "a", 5: "e", 3: "c", 4: "d"};
let obj3 = {1: "a", "blub": "blub", 3: "c", 4: "d", 5: "e"};
console.log("True=", equals(obj1, obj2));
console.log("False=", equals(obj1, obj3));