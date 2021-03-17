# [short title of solved problem and solution]

- Status: Accepted
- Deciders: Entire Team of Whatever We Want
- Date: 2021-03-10

Technical Story: Delpoy pomo web on github pages

## Context and Problem Statement

Github Pages is limited in host website in different folders.\
We need to host the pomo web on github pages, the website for js docs and cicd pipeline information should also host on it.


## Considered Options
- The fastest way is to have an empty index.html file in your root repository and redirect to the /source/index.html.
- Push a subtree to the gh-pages branch, you can set up an automatic script that does this
- https://gist.github.com/cobyism/4730490 


## Decision Outcome

Chosen option: Push a subttree to the gh-pages branch, because it meets our needs for hosting different websites

### Positive Consequences <!-- optional --

- It automatically deloy once we setup the github action
- We can host multiple websites on github
- It is easier to use and guide through informations

### Negative Consequences <!-- optional -->

- Making an github action that automatically add the source code to gh-pages branch takes a lot of times
- Github pages takes some time to do the update

## Pros and Cons of the Options <!-- optional -->

### Hack the github pages to redirect to the pomo web's index.html under source folder

- Good, it is straight forward and easy to redirect
- bad, because it has an empty index.html in the root repository
- Bad, it only redirect/works for on website
