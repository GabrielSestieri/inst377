const { default: countries } = require("./countries");

// You may wish to find an effective randomizer function on MDN.
function getCountry() {
  return fromServer[Math.floor(Math.random() * fromServer.length)];
}

function range(int) {
  const arr = [];
  for (let i = 0; i < int; i += 1) {
    arr.push(i);
  }
  return arr;
}

function sortFunction(a, b, key) {
  if (a[key] < b[key]) {
    return -1;
  } if (a[key] > b[key]) {
    return 1;
  }
  return 0;
}

document.body.addEventListener('submit', async (eevt) => {
  evt.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray(); // here we're using jQuery to serialize the form
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((fromServer) => {
      const random_countries = getCountry();
      console.log(countries);
      //console.log('fromServer', fromServer);
    })
    .catch((err) => console.log(err));
});