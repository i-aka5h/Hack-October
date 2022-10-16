# How to Contribute

- Fork this repository - [How to fork a repository](https://services.github.com/on-demand/intro-to-github/create-pull-request)
- Clone the forked repository into local space
- Create an Issue about what you want to contribute
- Make Sure Your work is unique 
- Once You were assigned a task you can start working on that
- Place your source code file in respective folder (you can create a new folder if it is not present)
- Optional - You can add comments at the start of the file, if you want to share something, like steps to run the code etc
- When you finished your work You can create a pull Request
- Generate a Pull Request (Optional: add problem name in the title and url to the problem in description)
- The Maintainer will check and review your work and if he finds it error free, then he will accept the pull request and your work will be merged
- That's it, you have successfully completed your 1 out of 5 PRs. Well Done!

---
---

#  How to Sync Forked Repo from Upstream Repo

### 1. Fork This Repository

### 2. Clone this repository to your local system

- Initialize git in your local directory
```
$ git init 
```
- Add remote Branch 
```
https://github.com/[Your Username]/[Your Forked Repository].git
```

### 3. Add the original repository as an upstream repository

```javascript
$ git remote add upstream https://github.com/[Original Owner Username]/[Original Repository].git
```

Hence, in this repository it would be

```javascript
$ git remote add upstream https://github.com/i-aka5h/Hack-October.git
```

### 4. Fetch all the changes from the repository. Note that commits to the original repository will be stored in a local branch called, upstream/master

```javascript
$ git fetch upstream
```

### 5. Make sure that you are on your fork's master or working branch

```javascript
$ git checkout [working branch]
```

For example,

```javascript
$ git checkout master
```

### 6. Merge the changes from the upstream/master into your local master or working branch. This will sync the fork's master branch with the upstream repository without losing your local changes. If you have made any changes that create conflict, you will have to resolve the conflict before you can complete the merge

```javascript
$ git merge upstream/master
```

### 7. At this point, your local branch is synced with the upstream/master branch and you can work on Your project and add commits on the way.

- Add the file/files to stagging area
```javascript
$ git add [file you wants to commit]
```

- or to add all the file at once

```javascript
 git add .
```
- After adding to staging area Commit them with a message
```javascript
 git commit -m "your message" (including quotes)
```


### 8. After you completes your project, In order to update the remote branch in Github, you need to push your changes

```javascript
$ git push -u origin master
```

### 9. At this point you have pushed all of your work to your forked repository.
- Now you can click on contribute button on your github forked repository
- If you have added something then it will be active
- Click on Open Pull Request
_ Leave a message or comment about the work and create the pull request
- the maintainer will check and review your work and if the work is unique and error free, you ull request will be accepted.

### 10. Hurray You have completed your 1/5 PR for the Hacktober Fest 2022.
