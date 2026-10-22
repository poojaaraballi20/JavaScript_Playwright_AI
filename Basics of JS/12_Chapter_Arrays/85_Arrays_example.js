let browser = ["Chrome", "Firefox", "Edge", "Safari", "Opera"];
console.log(browser.length)

browser.pop();
console.log(browser);

browser.shift();
console.log(browser);

for(let i=0; i<browser.length; i++){
    console.log(browser[i]);
    if(browser[i]=="Edge"){
        console.log("Edge is mo more used");
    }
}