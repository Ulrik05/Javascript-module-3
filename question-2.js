const url = "https://rawg.io/apidocs";
   
const proxy = "https://noroffcors.herokuapp.com/" + url;

const response = await fetch(proxy);

const results = await response.json();






//    const url = "https://rawg.io/apidocs";
//fetch(url, {
//  method: "GET",
//  withCredentials: true,
//  headers: {
//    "X-Auth-Token": "d072bf5817f34790bed2ffdeef27acc8",
//    "Content-Type": "application/json"
//  }
//})
//  .then(resp => resp.json())
//  .then(function(data) {
//    console.log(data);
//  })
//  .catch(function(error) {
//    console.log(error);
//  });