# Group 23 - Whatever You Want

## Pomo web
You can access pomo web using this [link](https://zvidmarb.github.io/cse110-w21-group23/).
![pomoLayout](https://github.com/zvidmarb/cse110-w21-group23/blob/master/docs/media/pomoScreenShot.png)

## Final project videos
- [final video public version](https://www.youtube.com/watch?v=FrdpRCxJEmM&t=40s)
- [final video private version](https://www.youtube.com/watch?v=K8b0A2cKTTc&t=105s)

## CI/CD Pipeline Information and Documentation:
All of the CI/Cd pipeline and JsDocs souce is under **/docs** folder.\
You can find documentation and implementation information about our CI/CD pipeline [here](https://github.com/zvidmarb/cse110-w21-group23/blob/master/docs/cicd/index.md)!\
The JsDocs information is [here](https://zvidmarb.github.io/cse110-w21-group23/docs/jsdocs/global.html#changeButtonText)\
We have recorded a video to explain how our cicd pipeline works, if you are interested, click [here](https://youtu.be/PCaQwrHsKXg).

## Design

The full design documentation of our pomo app is under **/specs** folder.

- We have five **architecture decision records (adr)**,  [ADRS](https://github.com/zvidmarb/cse110-w21-group23/tree/master/specs/adrs).

- You can find the pitch document using this [link](https://github.com/zvidmarb/cse110-w21-group23/blob/master/specs/pitch/Pomodoro%20Pitch.pdf). The pitch document contain the topics of risks and rabbit holes as well as a visual representation of what you are doing in the form of system diagrams and wireframes. Our pitch also have a statement of purpose as well as a section on user personas. 

- Our UI designer creates multiple version of the pomo web, [check it out](https://github.com/zvidmarb/cse110-w21-group23/tree/master/specs/interface)!

- First version of design style guide is [here](https://github.com/zvidmarb/cse110-w21-group23/blob/master/specs/style/DesignGuidev1.pdf).

- We come up we two [user personas](https://github.com/zvidmarb/cse110-w21-group23/tree/master/specs/users) for who might using our pomo web.

## Sprints
#### Once we finished the design part and move on to build our pomo web, we start to have sprint section follow the guidance of agile.
- Sprint 1
  - [Team split up](https://github.com/zvidmarb/cse110-w21-group23/blob/master/admin/meetings/020921-sprint1TeamSplitUp.md)
  - [Planning](https://github.com/zvidmarb/cse110-w21-group23/blob/master/admin/meetings/021121-sprint1Planning.md)
  - [Retrospective](https://github.com/zvidmarb/cse110-w21-group23/blob/master/admin/meetings/021821-retrospective1.md)
  - [Review](https://github.com/zvidmarb/cse110-w21-group23/blob/master/admin/meetings/021821-sprint-1-review.md)
- Sprint 2
  - [Planning](https://github.com/zvidmarb/cse110-w21-group23/blob/master/admin/meetings/022121-sprint2Planning.md)
  - [Retrospective](https://github.com/zvidmarb/cse110-w21-group23/blob/master/admin/meetings/030521-retrospective2.md)
  - [Review](https://github.com/zvidmarb/cse110-w21-group23/blob/master/admin/meetings/030821-sprint-2-review.md)

## Admins
- You can see all the meeting notes [here](https://github.com/zvidmarb/cse110-w21-group23/tree/master/admin/meetings)
- The signed contract is included [here](https://github.com/zvidmarb/cse110-w21-group23/tree/master/admin/misc)
- Standup meeting records listed [here](https://github.com/zvidmarb/cse110-w21-group23/tree/master/admin/standup)
- All the status video and final project video [here](https://github.com/zvidmarb/cse110-w21-group23/tree/master/admin/videos)
## Source 
[\source](https://github.com/zvidmarb/cse110-w21-group23/tree/master/source) folder includes all souce code and test code of pomo web.\
We separate the code in three part, css code in \css folder, java script code in \js folder, and the index.html is in the root of \source.

- Unit test
If you want to know more about the unit test, click [here](https://github.com/zvidmarb/cse110-w21-group23/tree/master/source/unitTests).


## Testing
We mainly focus on the unit tests, and have some cypress test for the part that we cannot use unit test to test. We spent a lot of time on how to run both unit test and cypress test together and have an intergreted test coverage, but it does not allow us to do it, so we have separated test coveages.
- Unit test
  - We did most of testing on unit test, except the start/stop button. Below is the coverage of the unit test.\
   ![pomoLayout](https://github.com/zvidmarb/cse110-w21-group23/blob/master/docs/media/unitTest.png)

- Cypress
  - We did start/stop button and other small test on cypress for e2e test as well.
  ![pomoLayout](https://github.com/zvidmarb/cse110-w21-group23/blob/master/docs/media/cypresstest.png)
  ![pomoLayout](https://github.com/zvidmarb/cse110-w21-group23/blob/master/docs/media/cypressCoverage.jpeg)

