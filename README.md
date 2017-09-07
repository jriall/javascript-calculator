# The Project

A recreation of a desktop calculator built with HTML, CSS, JavaScript and jQuery. Users can do simple addition, subtraction, multiplication and division, they can clear the display, chain commands, use a modulo operator and also a plus/minus button.

# The Logic

The logic of the calculator uses two variables to keep track of the input values - display for the most recently inputted value and total which tracks the running total.

When we click on a number it adds the value of the number clicked on to the display as well as the display variable. Clicking on an arithmetic button appends that operator to display (or replaces the current operator if the last value of the display is another operator). We can chain as many valid commands as we want in this way. When we click equals to return the result of the displayed operations we use eval() to display the result and also store that result in the lastAnswer variable.

Created in July 2017