# CICD Codestyle Enforcement and Linting

- Status: accepted
- Deciders: Entire Team
- Date: 2021-02-14

Technical Story: CICD Pipeline codestyle enforcement

## Context and Problem Statement

We needed to enforce codestyle in our CICD pipeline, and were considering several different options.

## Considered Options

- Superlinter
- having separate linters
  - eslint
  - htmlhint
  - stylelint

## Decision Outcome

Chosen option: "Superlinter", because the ease of use and adaptability as we add new technologies and expand our application.

### Positive Consequences <!-- optional -->

- flexibility
- ease of use
- can be easily run through github actions
- no need to install native files

### Negative Consequences <!-- optional -->

- due to the size of the repo, pulling on github actions takes a while
- unecessary overhead in regards to linting, but only in github actions

## Pros and Cons of the Options <!-- optional -->

### Having individual linters for everything

- Good, because faster github action workflow
- Bad, because unflexible and is a hassle to add or modify linter decisions
- Bad, because need separate github actions for every linter
- Bad, because less concise
