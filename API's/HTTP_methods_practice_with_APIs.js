// Get all posts
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    console.log('Total posts:', posts.length);
    console.log('First post:', posts[0]);
    console.log('Last post:', posts[posts.length - 1]);
  });

// Get a specific post--> post with ID 1
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(post => {
    console.log('Post title:', post.title);
    console.log('Post body:', post.body);
  });


// 2. GET with Query Parameters

// Get posts by user ID
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then(response => response.json())
  .then(posts => {
    console.log(`User 1 has ${posts.length} posts`);
    posts.forEach(post => {
      console.log(`- ${post.title}`);
    });
  });

//  3. POST Request (Create Data)

// Create a new post
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'My New Post',
    body: 'This is the content of my post',
    userId: 1
  })
})
.then(response => response.json())
.then(newPost => {
  console.log('Created post:', newPost);
  // Note: JSONPlaceholder doesn't actually save, but returns mock response
});

// 4. PUT Request (Update Data)

// Update post with ID 1
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 1,
    title: 'Updated Title',
    body: 'Updated content',
    userId: 1
  })
})
.then(response => response.json())
.then(updatedPost => {
  console.log('Updated post:', updatedPost);
});

// 5. DELETE Request

// Delete a post
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
.then(response => {
  if (response.ok) {
    console.log('Post deleted successfully');
  }
});