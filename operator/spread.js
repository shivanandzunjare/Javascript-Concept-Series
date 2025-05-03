//for arrays
const marvel_heros=["Thor","Ironman","Spiderman"];
const dc_heros = ["Superman", "Flash"];

const all_heros = [...dc_heros, ...marvel_heros];
console.log(all_heros);

//for objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

const str1 = "Hi"; const str2 = "Guys";

const merged = [...str1, ...str2];
console.log(merged);
