# CICD Unit testing

- Status: accepted
- Deciders: Entire Team
- Date: 2021-02-14

Technical Story: CICD Pipeline unit testing

## Context and Problem Statement

We needed to conduct unit tests on every component that is built and implemented into our applet.

## Considered Options

- Testing by hand
- testing frameworks:
  - Jest
  - Mocha
  - Chai
  - Tape

## Decision Outcome

Chosen option: "Jest", because the ease of setup and great documentation on usage.

### Positive Consequences <!-- optional -->

- ease of use
- extremely easy to automate in Actions
- thorough documentation
- works "out of the box"
- very common and generally considered a best-practice tool

### Negative Consequences <!-- optional -->

- May not be as feature rich as some other testing frameworks

## Pros and Cons of the Options <!-- optional -->

### Testing by hand

- Bad, doesn't standardize how tests should be written accross teams
- Bad, no means to enforce testing standards
- Bad, slow and can be automated

### Other testing frameworks

- Good, can be more feature rich
- Bad, can be more difficult to configure
- Bad, less used and consequently less thorough documentation and less widespread knowledge online
