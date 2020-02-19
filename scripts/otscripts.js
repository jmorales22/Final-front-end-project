
window.addEventListener("click", function(e) {
  const teamVariable = e.target.value;
  const url = ` http://opentable.herokuapp.com/api/restaurants?city=${teamVariable}`;
  fetch(url, {
    method: "GET",
    credentials: "same-origin"
  })
    .then(response => response.json())
    .then(function(data) {
      //console.log(data)
      //THIS IS A CALLBACK FUNCTION

      restaurantData(data, teamVariable);
    })
    .catch(function(error) {
      console.log(error);
    });
});

//Lists all of the restaurants by name

function restaurantData(data, city) {
  console.log(data.restaurants);
  const arrayRestaurantList = data.restaurants;
  const listElement = `${city}1`;
  const columnArea = document.getElementById(listElement);
  columnArea.innerHTML = '';
  const listArea = document.createElement("ul");
  columnArea.appendChild(listArea);

  arrayRestaurantList.map(function(list, index) {
    if (index < 5) {
      const listItem = document.createElement("li");
      listItem.innerHTML = list.name;
      listArea.append(listItem);
    }
    console.log(list.name);
  });
}
