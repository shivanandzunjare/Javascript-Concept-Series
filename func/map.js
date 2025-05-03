const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
  ];
  
  const names = users.map(user => user.name);
  console.log(names); // ["Alice", "Bob"]

  const map = new Map()
  map.set('In', "India")
  map.set('Fr',"France")
  map.set('USA',"United States of America")

  for(const [key, value] of map) {
    console.log(key, ':--', value);
  }
  