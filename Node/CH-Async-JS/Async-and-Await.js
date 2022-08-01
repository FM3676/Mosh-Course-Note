console.log("Before");








// Promise-based approach
getUser(1)
  .then((user) => getRepositories(user.gitHubUserName)) // Return a promise object from getRepositories(), using then() to deal with next mission.
  .then((repos) => getCommits(repos[0]))
  .then((commits) => console.log("Commits: ", commits))
  .catch((err) => console.log("Error: ", err.message));

// Async and Await approach
// When we use await operator in a function, we need to decorate the function with async modifier
async function displayCommits() {
  const user = await getUser(1); // Any time we calling a function return a Promise Object, we can await of that function and then get the actual result just like calling a Synchronous function.
  const repos = await getRepositories(user.gitHubUserName);
  const commits = await getCommits(repos[0]);
  console.log(commits);
}

displayCommits();














console.log("After");

function getUser(id, callback) {
  return new Promise((resolve, reject) => {
    // Kick off some async work.
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUserName: " Jack" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    // Kick off some async work.
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve({
        username: username,
        repositories: ["repo1", "repo2", "repo3"],
      });
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    // Kick off some async work.
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["commit1", "commit2", "commit3"]);
    }, 2000);
  });
}
