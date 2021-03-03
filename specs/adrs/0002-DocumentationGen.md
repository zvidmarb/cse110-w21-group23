# CICD Documentation Generation

- Status: accepted
- Deciders: Entire Team
- Date: 2021-02-14

Technical Story: CICD Pipeline documentationg beneration

## Context and Problem Statement

We needed to have documentation for our application, ideally generated upon each merge/push to the repo.

## Considered Options

- Hand generation of documentation
- Automatic documentation generation
  - JSDoc
  - Something else

## Decision Outcome

Chosen option: "JSDoc", widely considered a best-practice tool, other options didn't seem to have any significant upsides

### Positive Consequences <!-- optional -->

- Documentation of functions and their capabilities are generated automatically
- No need for human documentation, just comment function specifications accordingly
- Nicely formatted and easily understood documentation page
- Easy to apply template

### Negative Consequences <!-- optional -->

- None

## Pros and Cons of the Options <!-- optional -->

### Hand Documentation Generation

- Good, because hand-writing documentation can have better quality control
- Bad, because a high amount of effort must be taken on documentation rather than app functionality
- Bad, because slow and unecessary

### Other automatic documentation generators

- Bad, none are quite as ubiqitous as JSDoc
- Bad, no upisdes significant enough to warrant using a less popular and less understood tool
