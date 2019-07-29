fetch('http://puzzle.mead.io/puzzle').then( (response) => {
    response.json().then( (data) => {
        console.log(data);
    });
});

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = search.value;
    const url = '/weather/?address=' + location;
    fetch(url).then( (response) => {
        response.json().then( (data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data.forecast);
                console.log(data.location);
            }
        });
    });

});

