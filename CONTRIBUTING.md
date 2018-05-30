## Contribution Guidelines

### General Guidelines
If you’re just getting started work on an issue labeled “First Timers Only” in any project.
When sending a PR have an appropriate title referencing the issue which it solves. Add “fixes #” in the commit body, so that when the PR gets merged, the issue gets closed automatically. Do not do this if the PR solves only a part of the issue. See more information on commit guidelines here.
If you’d like to create a new issue, please go through our issue list first (open as well as closed) and make sure the issues you are reporting do not replicate the existing issues.
Have a short description on what has gone wrong (like a root cause analysis and description of the fix), if that information is not already present in the issue.
If you have issues on multiple pages, report them separately. Do not combine them into a single issue.

### Bugs and New Feautures as Issues
- In order to raise an issue, go to the issues tab of the repository and click *New Issue*. Then click bug or feature if depending on the type of issue.
- Add label of a bug/feature depending on the type issue.

### Submitting changes
In order to submit your changes, follow the steps given below:
1. Commit your changes with ```$git commit -am '<Your commit message>'```
Make sure all of your commits are atomic (one feature per commit or one issue per commit). Always write a clear log message for your commits.
Your commit message must be in active voice instead of passive voice (Add instead of Added, Create instead of Created).

2. Push your change to the main repository with ```$git push origin <your branch>```

3. Please create a GitHub Pull Request with a clear list of what you've done . When you send a pull request, remember to attach a screenshot of the changed view along with the issue solved.
Follow the template given in PULL_REQUEST_TEMPLATE.md

4. Merge your changes to the master branch once your Pull Request has been approved.
**Note: You must not push your changes to master branch!!**

### Coding conventions
Start reading our code and you'll get the hang of it. We optimize for readability:
- Indent usinng four spaces (tabs)
- Avoid logic in views.
- ALWAYS put spaces after list items and method parameters ([1, 2, 3], not [1,2,3]), around operators (x += 1, not x+=1), and around hash arrows.
