async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data)
    
}
fetchData()

// //try catch 
// async function fetchUser() {
//     try {
//       const response = await fetch('https://wrong-url.com');
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error fetching user:', error);
//     }
//   }
//   fetchUser();

  //real world problem

  function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  async function run() {
    console.log('waiting ... 2 seconds')
    await delay(2000)
    console.log('waiting done')
  }

  run()