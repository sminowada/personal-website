const checkbox = document.getElementById('toggle-switch');
const setColor = localStorage.getItem("color");
document.documentElement.style.setProperty('--bg-color', setColor);


// Add an event listener for the 'change' event
checkbox.addEventListener('change', function () {
    // Show an alert when the checkbox is clicked
    const color = getComputedStyle(document.documentElement).getPropertyValue('--bg-color')

    if (color == '#CFCEC6') {
        document.documentElement.style.setProperty('--bg-color', 'black');
        document.documentElement.style.setProperty('--img-filter', '100%');
    }
    else {
        document.documentElement.style.setProperty('--bg-color', '#CFCEC6');
        document.documentElement.style.setProperty('--img-filter', '0%');
    }
    localStorage.setItem("color", getComputedStyle(document.documentElement).getPropertyValue('--bg-color'))
});
document.addEventListener('DOMContentLoaded', function () {
    // Check if the checkbox is checked
    if (setColor === 'black') {

        checkbox.checked = true;
        document.documentElement.style.setProperty('--img-filter', '100%');
    }
});
