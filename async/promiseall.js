
async function fetchMultiple() {
    try {
      const [user, posts, comments] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/comments/1').then(res => res.json())
      ]);
  
      console.log('User:', user);
      console.log('Post:', posts);
      console.log('Comment:', comments);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchMultiple();
  