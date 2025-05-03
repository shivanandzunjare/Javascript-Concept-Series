const original = {
    name : 'Jack Sparrow',
    address : {
        city : "Black Pearl"
    }
}
//shallow copy
const shallowcopy = {...original};
//Deep copy
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "London"

console.log(original.address.city);
console.log(deepCopy.address.city);