//devuelve un numero aleatorio con tope en max
function getRandomInt(max) {
      let number= Math.floor(Math.random() * Math.floor(max));
      //antes de retornar verifica que no el resultado sea 0. en ese caso lo hace de nuevo
      return (number === 0) ? getRandomInt(max) : number;
      }
//ciclo for para obtener 5 numeros aleatorios y obtener 5 posts
for (let i = 1; i < 6; i++) {
      let random = getRandomInt(501);

    fetch('https://jsonplaceholder.typicode.com/comments/' + random)
        .then(response => response.json())
        .then(json => document.getElementById("post" + i).innerHTML = json.body)
}

//ciclo for para obtener 5 numeros aleatorios y obtener 5 nombres de usuarios
for (let i = 1; i < 6; i++) {
      let random = getRandomInt(11); 

      fetch('https://jsonplaceholder.typicode.com/users/' + random)
          .then(response => response.json())
          .then(json => document.getElementById("name" + i).innerHTML = json.name)
  }