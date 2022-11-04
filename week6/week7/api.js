fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))


  fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}