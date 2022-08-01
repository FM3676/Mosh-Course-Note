console.log("Before");

getUser(1, getRepositories);

console.log("After");

// --------------------------------------------------------

// Although both of these two function named same, but they are different, because they have different parameter
function getRepositories(user) {
  getRepositories(user.gitHubUserName, getCommits);
}

function getCommits(repos) {
  getCommits(repo, displayCommits); // Here we don't call the function, but deliver the referance of it
}

function displayCommits(commits) {
  console.log(commits);
}

// --------------------------------------------------------

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
