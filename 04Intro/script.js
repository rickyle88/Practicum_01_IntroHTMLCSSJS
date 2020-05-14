// initial state of the button: "not clicked"
var isClicked = false;
// here javascript finds and selects a button element
var button = document.getElementsByTagName('button')[0];

// when somebody clicks the button, script starts selecting
button.onclick = function () {
    if (isClicked) {
        // if the button's state is "clicked", then do this
        button.classList = '';
        isClicked = false;

    } else {
        // if the button's state is "not clicked", then do this
        button.classList.add('clicked');
        isClicked = true;
    }
};

// Now your button works, but you can't undo the like. Once the button has been clicked, it stays clicked forever and ever. Let's give our users the ability to change their minds.
// For this, you need to instruct the browser on how to respond when a user clicks the button for the second time. The browser should remove the clicked state from the button and change the isClicked value to false. In order to do so, add the following code to line 10 in the script.js file: