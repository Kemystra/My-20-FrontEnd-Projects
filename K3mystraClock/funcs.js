axios.get("https://api.thecatapi.com/v1/images/search?mime_types=gif")
.then((response) => {
	document.getElementById('cat').src = response.data[0].url;
});

function zfill(num, len) {
	snum = num.toString();
	return ('0'.repeat(len-snum.length)) + snum;
}

function updateTime() {
	let clockFace = document.getElementById("clock");
	d = new Date();
	sec = d.getSeconds();
	mins = d.getMinutes();
	h = d.getHours();
	clockFace.innerHTML = zfill(h,2) + ':' + zfill(mins,2) + ':' + zfill(sec,2);
}
setInterval(updateTime, 1000)
