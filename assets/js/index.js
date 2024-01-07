// Fetch GitHub stats using GitHub API
fetch("https://api.github.com/users/baimamboukar")
  .then((response) => response.json())
  .then((data) => {
    const githubStatsElement = document.getElementById("github-stats");
    githubStatsElement.innerHTML = `<h2>GitHub Stats:</h2>
          <p>Public Repositories: ${data.public_repos} | Followers: ${data.followers} | Following: ${data.following}</p>`;
  })
  .catch((error) => console.error("Error fetching GitHub stats:", error));
