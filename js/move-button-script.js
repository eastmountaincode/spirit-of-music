document.getElementById("move-content-button").addEventListener('click', function() {
    const body = document.body;
    const currentDirection = window.getComputedStyle(body).getPropertyValue('flex-direction');
    const moveButton = document.getElementById("move-content-button");

    if (currentDirection === 'row') {
        body.style.flexDirection = 'column';
        moveButton.textContent = "move this to the top";

    } else {
        body.style.flexDirection = 'row';
        moveButton.textContent = "move this down";
    }

});