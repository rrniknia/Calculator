# Calculator
simple GUI calculator

This code sucks and I am aware that this code sucks. It's inefficient for what I need it to do and can be redone to be more effective and prettier as well. But it works for now. I'll revisit it sometime in the future and rework it so it's not as spaghetti.

In this project, I:
* used CSS to create a responsively styled calculator out of HTML divs
* added functionality to calculator buttons using event listeners
* handled JS inputting and outputting to and from JS variables through a GUI
* used boolean variables to ensure and check for states (in this case, justOperated, specifying whether an operation has just been made or not, to prevent bugs)
* tested for bugs and fixed them accordingly

This is a simple GUI calculator. Press the number buttons to create a current operand. When an operator button (+, -, \*, /) is pressed, the current operand moves to the previous operand, so you can input a *new* current operand.

No decimals yet - I will add them later.

You can iterate over multiple operands (i.e. 4 + 4 + 5 + 6 + 21 + 51 - 900 = ???).

If you divide by 0, the universe will enter rapid entropy, destroying all life as we know it.

Also, I made the calculator buttons light up and feel good when you click on them.
