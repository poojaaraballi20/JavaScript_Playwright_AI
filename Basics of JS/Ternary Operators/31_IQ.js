let isCI= true;

let browsermode= isCI ? "headless": "headed";

console.log("Launching browser in:", browsermode, "mode");