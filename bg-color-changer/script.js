const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        if (event.target.id == 'grey') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id == 'white') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id == 'blue') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id == 'yellow') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id == 'purple') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id == 'orange') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id == 'red') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id == 'brown') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id == 'aqua') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id == 'pink') {
            body.style.backgroundColor = event.target.id;
        }
    });
});
