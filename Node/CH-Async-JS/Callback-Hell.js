console.log("Before");


// Callback Hell
getUser(1, (user) => {
  getRepositories(user.gitHubUserName, (repos) => {
    getCommits(repos, () => {});
  });
});


// As a comparison
// Synchronous
const user = getUser(1);
const repos = getRepositories(user.gitHubUserName);
const commits = getCommits(repos[0]);
// It's Clearer


console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    callback({ id: id, gitHubUserName: " Jack" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling GitHub API...");
    callback({ username: username, repositories: ["repo1", "repo2", "repo3"] });
  }, 2000);
}

function getCommits(repo, callback) {}
