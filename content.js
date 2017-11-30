console.log("KeyCode Extension on");
window.addEventListener("keypress", (e) =>{
	console.log(e.keyCode);
	chrome.runtime.sendMessage({key: e.keyCode,});
	console.log(e.keyCode);
}, false);