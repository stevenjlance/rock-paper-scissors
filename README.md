# ROCK PAPER SCISSORS

Who's ready to play an epic game of rock paper scissors?

![](https://media.giphy.com/media/3ohryhP6GnMcyLN1II/giphy.gif)

Today we are going to build our own app that lets us play rock-paper-scissors against the computer!

## GOAL

In this project, you are going to build an app that:
1. Takes in a users choice of rock, paper, or scissors based on the button that they click.
2. Return an output that tells the user what they and the computer picked ***and*** update the score based on whether the computer or the the player won.

![Example App](https://media.giphy.com/media/eHG8On7sPBamCq2wiD/giphy.gif)


## HELPFUL INFORMATON: `<i></i>`
All of the images on this webpage have been imported from [Font Awsome](https://fontawesome.com/). When using the tag `<i></i>` we simply need to update the class with a class name that corresponds to the icon from the linked stylesheet from Font Awesome. `<i>` tags work just like all other tags we have used in HTML. The classes used in today's project are:

```html
<!-- Mobile Icon -->
<i class="fas fa-mobile-alt"></i>
<!-- Question Mark -->
<i class="fas fa-question"></i>
<!-- User symbol -->
<i class="fas fa-user"></i>
<!-- Rock Hand -->
<i class="fas hand-rock"></i>
<!-- Paper Hand -->
<i class="fas paper-rock"></i>
<!-- Scissors Hand -->
<i class="fas scissors-rock"></i>
```

Since these tags function just like the other tags we have worked with in HTML, we can user `.innerHTML` with these icons if you wish to update an image.
```javascript
var questionMark = document.querySelector(".computerChoice");
// Change the quesiton mark to rock
questionMark.innerHTML = `<i class="fa hand-rock"></i>`
```

## TASKS
The main goal of building this app is to showcase your use of **parameters** and **return statements**. In addition to producing an app that lets you play rock paper scissors, your final project should include the following:

1. Create event listeners for the rock, paper, and scissors. When each is clicked, the playerOutput should update with this symbol.
2. A function called `computerChoice()` that randomly generates rock, paper, or scissors and **returns** this value. This should be called everytime that the user clicks the rock, paper, or scissors icons
3. A function called `setIcon` that has **1 parameter**. This function should take in the computers choice of rock, paper, or scissors and update the icon inside the `<div class='computerChoice'>` to show the icon tht corresponds to the computers choice. **SEE ABOVE FOR HELPFUL TIPS ON HOW TO USE `<i>` TAGS!**
4. A function called `checkWinner` that has **2 parameters**: the player and the computer choice. E.g. `checkWinner("rock","rock")` would return tie from the function whereas `checkWinner("rock", "scissors")` would return a message of "Player wins!" (assuming the player is the one that put in the choice of rock).
5. A function called `updateScore` that has **1 parameter**. This function should take in whether the computer won, the player won, or there was a tie and update the screen (and score) to reflect this result.