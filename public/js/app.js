console.log('Client side javascript is loaded');


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    message1.textContent = 'Loading...';
    message2.textContent = '';
    if(search.value.trim() === '') {
        message1.textContent = 'Type in an adress';
    }
    else {
        fetch(`http://localhost:3000/weather?address=${search.value.trim()}`).then((response) => {
            response.json().then((data) => {
                if(data.error) {
                    message1.textContent = data.error;
                }
                else {
                    message1.textContent = data.location;
                    message2.textContent = `Today is ${data.forecast.type} with maximum temperature of ${data.forecast.max} and minimum temperature of ${data.forecast.min}`;
                }
            });
        });
    }
});