// Get basic user info (no authentication needed for public data)
function getUserInfo(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(user => {
      console.log(`👤 GitHub User: ${user.login}`);
      console.log(`   Name: ${user.name || 'Not provided'}`);
      console.log(`   Followers: ${user.followers}`);
      console.log(`   Following: ${user.following}`);
      console.log(`   Public Repos: ${user.public_repos}`);
      console.log(`   Profile: ${user.html_url}`);
    })
    .catch(error => console.error('Error:', error));
}

// Test with different usernames
getUserInfo('imusmanshakir'); // GitHub's example user
getUserInfo('torvalds'); // Linus Torvalds


// 2. Get User Repositories

// Get a user's public repositories
function getUserRepos(username) {
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
      console.log(`\n📂 ${username}'s Repositories (${repos.length}):`);
      repos.forEach(repo => {
        console.log(`   🟢 ${repo.name}`);
        console.log(`      ⭐ Stars: ${repo.stargazers_count}`);
        console.log(`      🍴 Forks: ${repo.forks_count}`);
        console.log(`      📝 ${repo.description || 'No description'}`);
        console.log(`      🔗 ${repo.html_url}\n`);
      });
    });
}
getUserRepos('imusmanshakir');

// 3. Search Repositories

// Search for repositories by topic
function searchRepos(query) {
  fetch(`https://api.github.com/search/repositories?q=${query}`)
    .then(response => response.json())
    .then(data => {
      console.log(`\n🔍 Search results for "${query}" (${data.total_count} found):`);
      data.items.slice(0, 5).forEach(repo => {
        console.log(`   📦 ${repo.full_name}`);
        console.log(`      ⭐ ${repo.stargazers_count} stars`);
        console.log(`      📝 ${repo.description || 'No description'}`);
      });
    });
}

searchRepos('javascript');
searchRepos('react');
searchRepos('nodejs');


// Analyze a GitHub user's profile
function analyzeGitHubUser(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(user => {
      console.log(`\n📊 GitHub Profile Analysis for ${user.login}:`);
      console.log(`   🏆 Popularity Score: ${user.followers + user.public_repos}`);
      console.log(`   👥 Follower Ratio: ${(user.followers / (user.following || 1)).toFixed(2)}`);
      console.log(`   📅 Account age: ${Math.floor((new Date() - new Date(user.created_at)) / (1000 * 60 * 60 * 24 * 365))} years`);
      
      // Get their repos to find most popular one
      return fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=1`);
    })
    .then(response => response.json())
    .then(repos => {
      if (repos.length > 0) {
        console.log(`   ⭐ Most starred repo: ${repos[0].name} (${repos[0].stargazers_count} stars)`);
      }
    });
}

analyzeGitHubUser('torvalds');
analyzeGitHubUser('imusmanshakir');