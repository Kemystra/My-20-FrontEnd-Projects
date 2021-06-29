function start() {
	canvas = document.getElementById("drawarea");
	setCanvasSize(70, 70);
}

function zfill(snum, len) {
	return ('0'.repeat(len-snum.length)) + snum;
}

function RGBToHex(r, g, b) {
	return '#' + zfill(Number(r).toString(16),2) + zfill(Number(g).toString(16),2) + zfill(Number(b).toString(16),2);
}

function setCanvasSize(w, h) {
	canvas.width = window.innerWidth*w/100;
	canvas.height = window.innerHeight*h/100;
}

function drawCircle(xc, yc, radius, color) {
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.arc(xc, yc, radius, 0, 2 * Math.PI);
	ctx.fillStyle = color;
	ctx.fill();
}

function RandInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function detectClick(event) {
	var red = RandInt(0, 255);
	var green = RandInt(0, 255);
	var blue = RandInt(0, 255);
	
	var posX = event.offsetX;
	var posY = event.offsetY;
	var rad = RandInt(10, 50);
	
	var color = RGBToHex(red, green, blue);
	drawCircle(posX, posY, rad, color);
} 