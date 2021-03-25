# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Natalie Kwong**

Time spent: **#** hours spent in total

Link to project: https://glitch.com/edit/#!/amber-jungle-kite

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] When a player makes a first and second mistake, there is an alert telling them
      how many mistakes they have made and how many tries they have left. Then the
      sequence is played again.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
Fonts: https://www.w3schools.com/css//css_font_websafe.asp
CSS reference: https://cssreference.io/
Colors: https://www.rapidtables.com/web/css/css-color.html
For loops: https://www.w3schools.com/js/js_loop_for.asp
Math.random: https://www.w3schools.com/JS/js_random.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
A challenge I encounted in creating this submission was correctly implementing the 3 mistakes feature
in my game. After I wrote my code for this feature, I was testing out the game and it kept not working correctly.
The alerts that I had implementing to inform the player of their mistakes weren't displaying the correct number of mistakes
the user had made, and no matter how many mistakes I made, the game never went to the losing function. Additionally,
the sequence would continue when I didn't want it to. I overcame this by changing the mistakes counter I had created from
a constant variable to a global variable after I realized that the mistakes counter kept being set back to 0, which explains
why the game was never taken to the losing function. I also realized that I had prematurely incremented the mistakes counter
before my if statement that determined which alert to show, and so I moved the increment to after the if statement
instead.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
After completing my submission, I have questions about how websites use cookies to store user data.
It would be interesting to learn more about how websites store cookies, what privacy measures they use to protect 
this data (or how they sell it to other companies), what kind of algorithms websites use to extract information from these cookies, 
and how they use this information to "personalize" users' experiences on their websites. I wonder about what kinds of user 
patterns websites are able to extract from their users’ habits online, both as a general population and by individual. It would 
be interesting to learn to what extent a user’s experience on a website may differ due to cookies (particularly on websites that 
include some form of shopping).

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours to work on this project, I would spend them implementing the timer for each turn.
I found a tutorial that gave code on how to make such a timer that I could have used, but I didn't have
enough time to completely understand what was happening in the code given and so I decided to not use it
in my game because I never want to use code that I don't understand. I think it would be very fun to learn about
how to use timed features in web development, and that is something I will continue to explore. 
I also did not have enough time to add images and unique audio to my buttons; I did find cute pictures of different
colored frogs I was going to use, but unforunately the deadline for this is coming up!
I would also like to make the interface of my game more interesting by using gradient color schemes for
the background and buttons instead of solid colors. Additionally, I would like to put a counter
on the screen for how many tries the user has left. I would also like to keep a running count of total games
the user has won and lost if a user wants to play the game multiple times.



## License

    Copyright Natalie Kwong

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.