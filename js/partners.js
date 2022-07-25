const cardsRestaurants = document.querySelector('.cards-restaurants');

const renderItems = (data) => {
    data.forEach(item => {
        console.log(item);
    });
};

fetch('./db/partners.json')
    .then(response => response.json())
    .then(data => renderItems(data))
    .catch(error => console.log(error));
