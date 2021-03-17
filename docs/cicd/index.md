## Documentation:

You can find the documentation for our pomo timer [here](../jsdocs)!

## CI/CD Pipeline: 

Phase one of our CI/CD pipeline is integrated as follows:

![cicd pipeline](cicd.drawio.png)

Our primary development workflow will be centered along feature branch development and merging into master after code several code-quality checks. Among these code quality checks are:

### Codestyle Enforcement and Linting:
We decided to use [superlinter](https://github.com/github/super-linter) for its ease of use and convenience. Superlinter is a combination of linters for a wide array of programming languages, written in bash, allowing it to be easily plugged into GitHub actions without having to download all its dependencies natively. For our purposes, we primarily use it for HTMLHint (HTML), stylelint (CSS), and eslint (JavaScript). As for drawbacks, running superlinter in actions does take slightly longer than simply downloading the linters we need, but certainly not long enough to warrant the hassle of needing to modify our pipeline anytime we want to introduce another language, for whatever reason that might be. Superlinter will be ideal for the long-term flexibility of our codebase.

### Automated testing:
To automate testing, we decided to use Facebook's [Jest](https://jestjs.io/) testing framework. Compared to other testing frameworks we looked at such as Mocha or Tape, Jest was the easiest to configure. It required minimal setup and was relatively easy to get working with npm, and its documentation is extremely thorough. Implementing it into GitHub actions was straightforward as well, as installing npm dependencies, building, and testing only took a single line of bash commands. 

### Automated Documentation Generation:
As far as documentation generation goes, JSDoc seems to be widely considered a best-practice tool, and the other options we looked at didn't show any significant upsides to warrant choosing a less used tool. Getting JSDoc implemented into actions was slightly less starightforward, but still pretty simple given its popularity. We found [JSDoc Action](https://github.com/marketplace/actions/jsdoc-action) on the GitHub marketplace, which we used to run JSDoc with the minami template automatically within the GH Action's VM. Then, we used [Add & Commit](https://github.com/marketplace/actions/add-commit) to commit those changes to the documentation section of our local repository.

### Manual Code Review:
At the end of the day, the aforementioned tools are just to make our work easier: no tool will be a catch-all for errors and a spotless codebase. Before each merge into the master branch, we will have a manual code review to ensure that our codebase stays clean.

### Video Demonstration of our Pipeline:
[![](http://img.youtube.com/vi/3krFFQ0mCoo/0.jpg)](http://www.youtube.com/watch?v=3krFFQ0mCoo "pipeline demonstration")
