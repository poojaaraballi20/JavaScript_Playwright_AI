let environment= "Staging";

let baseURL = environment==="prod" ? "https://apiexmaple.com":"https://staging-api-example.com";

console.log(baseURL);