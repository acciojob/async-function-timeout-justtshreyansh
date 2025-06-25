//your JS code here. If required.
const text= document.querySelector("#text");
const delay = document.querySelector("#delay");
const button = document.querySelector("#btn");
const output = document.querySelector("#output");
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function retrieve(){
	let textVal = text.value.trim();
	let delayTime = parseInt(delay.value,10);
	await wait(delayTime);
	output.innerHTML = `${textVal}`;
	
}
button.addEventListener('click',retrieve);