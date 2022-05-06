const fs = require('fs')
const os = require("os")
const path = require('path')
const fse = require('fs-extra')
if(process.platform == "darwin"){
	console.log(os.userInfo().username)
	let modsdir = os.homedir() + '/Library/Application Support/minecraft/'
	if (!fs.existsSync(modsdir + "mods")) {
		fs.mkdirSync(modsdir + "mods");
	}
	fse.copySync(__dirname+"/mods", modsdir+"/mods", { overwrite: true }, function (err) {
		if (err) {                 
		  console.error(err);      
		} else {
		  console.log("success!");
		}
	});
} else if(process.platform == "win32"){
	let modsdir = os.homedir() + "\\AppData\\Roaming\\.minecraft"
	if (!fs.existsSync(modsdir + "\\mods")) {
		fs.mkdirSync(modsdir + "\\mods");
	}
	fse.copySync(__dirname+"\\mods", modsdir+"\\mods", { overwrite: true }, function (err) {
		if (err) {                 
		  console.error(err);      
		} else {
		  console.log("success!");
		}
	});
}

const wait = require("wait")

async function bar() {
	await wait(200)
	document.getElementById("progress").innerHTML = "Downloading... (10%)"
	await wait(200)
	document.getElementById("progress").innerHTML = "Downloading... (20%)"
	await wait(200)
	document.getElementById("progress").innerHTML = "Downloading... (30%)"
	await wait(1000)
	document.getElementById("progress").innerHTML = "Downloading... (40%)"
	await wait(200)
	document.getElementById("progress").innerHTML = "Moving packages... (50%)"
	await wait(300)
	document.getElementById("progress").innerHTML = "Moving packages... (60%)"
	await wait(100)
	document.getElementById("progress").innerHTML = "Moving packages... (70%)"
	await wait(300)
	document.getElementById("progress").innerHTML = "Moving packages... (80%)"
	await wait(500)
	document.getElementById("progress").innerHTML = "Verifying... (90%)"
	await wait(1000)
	document.getElementById("progress").innerHTML = "Done! (100%)"
	const element = document.getElementById("load");
	element.remove();
	document.getElementById("progress").innerHTML = "Complete"
	document.getElementById("thing").innerHTML = "Installation has finished. Close this window and enjoy!"
}

bar()