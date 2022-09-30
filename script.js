// constances
const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');
const WIDTH = 400, HALF_WIDTH = WIDTH/2;
const HEIGHT = 400, HALF_HEIGHT = HEIGHT/2;
const DOUBLE_PI = 2 * Math.PI;
const HALF_PI = Math.PI/2;
const FPS = 60;
const cycleDelay = Math.floor(1000 / FPS);
const roomBoarder = 0.05;


var base_image = new Image();
// base_image.src = "../assests/images/exit.png";
base_image.src = "https://www.dropbox.com/s/tqlwvkhc1xpjx0n/exit.png";
base_image.crossOrigin = "Anonymous";

//classes
class vector2 {
	constructor(p1=0,p2=0) {
		this.x = p1;
		this.y = p2;
	}
	one(){
		this.x = 1;
		this.y = 1;
	}
	multiply(amt){
		this.x *= amt;
		this.y *= amt;
	}
}

class rect {
	constructor(pos,size, rotation = 0) {
		this.position = pos;
		this.size = size;
		this.rotation = rotation;

	}
	draw(color = "Black") {
		context.fillStyle = color;
		context.fillRect(
			canvas.width / 2 - HALF_WIDTH + this.position.x,
			canvas.height / 2 - HALF_HEIGHT + this.position.y,
			this.size.x, this.size.y);
	}
}

class room {
	constructor(name = "",base = new rect(new vector2(),new vector2(roomSize.x,roomSize.y)),roomData) {
		this.name = name;
		this.base = base;
		this.roomData = roomData;
		this.entered = false;
		this.next = false;
	}
	
	draw(){
		// this.base.draw("Black")

		var rec2 = new rect(new vector2(this.base.position.x + this.base.size.x * roomBoarder - camOffset.x,this.base.position.y + this.base.size.y * roomBoarder - camOffset.y), new vector2(roomSize.x-roomSize.x*(roomBoarder*2),roomSize.y-roomSize.y*(roomBoarder*2)))
		
		// entered
		if (this.entered) {
			rec2.draw("#dadada")
			for (let exit in this.roomData[1]) {
				if (this.roomData[1][exit] == 1) {
				  var pos = new vector2(this.base.position.x + roomSize.x / 2 - roomSize.x / 10  - camOffset.x,this.base.position.y - camOffset.y)
				  var size = new vector2(roomSize.x/10,roomSize.y/10)
				  var rec = new rect(pos,size)
				  rec.draw("#dadada")
				}
				if (this.roomData[1][exit] == 2) {
				  var pos = new vector2(this.base.position.x + roomSize.x - roomSize.x / 10 - camOffset.x,this.base.position.y + roomSize.x / 2 - roomSize.y / 10 - camOffset.y)
				  var size = new vector2(roomSize.x/10,roomSize.y/10)
				  var rec = new rect(pos,size)
				  rec.draw("#dadada")
				}
				if (this.roomData[1][exit] == 3) {
				  var pos = new vector2(this.base.position.x + roomSize.x / 2 - roomSize.x / 10 - camOffset.x,this.base.position.y + roomSize.y - roomSize.y / 10 - camOffset.y)
				  var size = new vector2(roomSize.x/10,roomSize.y/10)
				  var rec = new rect(pos,size)
				  rec.draw("#dadada")
				}
				if (this.roomData[1][exit] == 4) {
				  var pos = new vector2(this.base.position.x - camOffset.x,this.base.position.y + roomSize.x / 2 - roomSize.y / 10 - camOffset.y)
				  var size = new vector2(roomSize.x/10,roomSize.y/10)
				  var rec = new rect(pos,size)
				  rec.draw("#dadada")
				}
			}
			for (let exit in this.roomData[2]) {
				if (this.roomData[2][exit] == 1) {
				  var pos = new vector2(this.base.position.x+roomSize.x/2-roomSize.x/10 - camOffset.x,this.base.position.y - camOffset.y)
				  var size = new vector2(roomSize.x/10,roomSize.y/10)
				  var rec = new rect(pos,size)
				  rec.draw("#dadada")
				}
				if (this.roomData[2][exit] == 2) {
				  var pos = new vector2(this.base.position.x+roomSize.x-roomSize.x/10 - camOffset.x,this.base.position.y+roomSize.x/2-roomSize.y/10 - camOffset.y)
				  var size = new vector2(roomSize.x/10,roomSize.y/10)
				  var rec = new rect(pos,size)
				  rec.draw("#dadada")
				}
				if (this.roomData[2][exit] == 3) {
				  var pos = new vector2(this.base.position.x+roomSize.x/2-roomSize.x/10 - camOffset.x,this.base.position.y+roomSize.y-roomSize.y/10 - camOffset.y)
				  var size = new vector2(roomSize.x/10,roomSize.y/10)
				  var rec = new rect(pos,size)
				  rec.draw("#dadada")
				}
				if (this.roomData[2][exit] == 4) {
				  var pos = new vector2(this.base.position.x - camOffset.x,this.base.position.y+roomSize.x/2-roomSize.y/10 - camOffset.y)
				  var size = new vector2(roomSize.x/10,roomSize.y/10)
				  var rec = new rect(pos,size)
				  rec.draw("#dadada")
				}
			}
		} 

		//not entered
		if (!this.entered) {
			rec2.draw("#0d0d0d")
		}
		
		//next room
		if (this.next) {
			rec2.draw("#1a1a1a")
			for (let exit in this.roomData[2]) {
				if (this.roomData[2][exit] == 1) {
				  var pos = new vector2(this.base.position.x+roomSize.x/2-roomSize.x/10 - camOffset.x,this.base.position.y - camOffset.y)
				  var size = new vector2(roomSize.x/10,roomSize.y/10)
				  var rec = new rect(pos,size)
				  rec.draw("#1a1a1a")
				}
				if (this.roomData[2][exit] == 2) {
				  var pos = new vector2(this.base.position.x+roomSize.x-roomSize.x/10 - camOffset.x,this.base.position.y+roomSize.x/2-roomSize.y/10 - camOffset.y)
				  var size = new vector2(roomSize.x/10,roomSize.y/10)
				  var rec = new rect(pos,size)
				  rec.draw("#1a1a1a")
				}
				if (this.roomData[2][exit] == 3) {
				  var pos = new vector2(this.base.position.x+roomSize.x/2-roomSize.x/10 - camOffset.x,this.base.position.y+roomSize.y-roomSize.y/10 - camOffset.y)
				  var size = new vector2(roomSize.x/10,roomSize.y/10)
				  var rec = new rect(pos,size)
				  rec.draw("#1a1a1a")
				}
				if (this.roomData[2][exit] == 4) {
				  var pos = new vector2(this.base.position.x - camOffset.x,this.base.position.y+roomSize.x/2-roomSize.y/10 - camOffset.y)
				  var size = new vector2(roomSize.x/10,roomSize.y/10)
				  var rec = new rect(pos,size)
				  rec.draw("#1a1a1a")
				}
			}
		} 

		if (this.roomData[1].length == 0 && this.entered) {
			var scale = new vector2(roomSize.x/2.5,roomSize.x/2.5)
	  	context.drawImage(base_image, 
	  		canvas.width / 2 - HALF_WIDTH + this.base.position.x - camOffset.x + roomSize.x/2 - scale.x/2,
	  		canvas.height / 2 - HALF_HEIGHT + this.base.position.y - camOffset.y + roomSize.y/2 - scale.y/2,scale.x,scale.y);
		}
	}
}

class Player {
	constructor() {
		this.position = new vector2();
		this.position.one()
		this.position.multiply(10)
		this.angle = Math.PI;
		this.strafe = 0;
		this.move = 0;
		this.speed = roomSize.x/2;
	}
}

class Grid {
	constructor(size,defult = "akakaka") {
		if (defult == "akakaka") {
			console.warn("no defult value set")
		} else {
			this.defult = defult
			this.size = size
			this.map = []
			for (let y = 0; y<=size.y-1; y++) {
				this.map[y] = []
				for (let v = 0; v<=size.x-1; v++) {
					this.map[y][v] = defult
				}
			}
		}
	}

	count(value) {
		var a = 0;
		for (let y = 0; y<=this.size.y-1; y++) {
			for (let x = 0; x<=this.size.x-1; x++) {
				if (this.get(x,y) == value) {
					a++;
				}
			}
		}
		return a
	}

	get(x,y) {
		return this.map[y][x]
	}
	getV2(position) {
		return this.map[position.y][position.x]
	}

	set(x,y,val) {
		this.map[y][x] = val
	}
	setV2(position,val) {
		this.map[position.y][position.x] = val
	}
}

// varibles
var oldCycleTime = 0;
var cycleCount = 0;
var fps_rate = '...';
var mouse =  new vector2();
var mapSize = new vector2(10,10);
var map = new Grid(mapSize,0)
var roomSize = new vector2(WIDTH,HEIGHT);
var player = new Player()
var floor = 1
var roomsAmt = floor*3
var holes = range(mapSize.x * mapSize.y - roomsAmt - 3 ,mapSize.x * mapSize.y - roomsAmt );
var nextRoom = null
var lastRoom = null
var stop = 0
var endRoom = 0
var def = true
var camOffset = new vector2()

// events
{
	document.addEventListener('mousemove', (event) => {
		def = true
	});

	document.onkeydown = function(event) {
		switch (event.keyCode) {
			case 87: player.move = 1; def = true; break;
			case 83: player.move = -1; def = true; break;
			case 68: player.strafe = 1; def = true; break;
			case 65: player.strafe = -1; def = true; break;
			case 32: if (map.get(Math.floor(player.position.x / roomSize.x),Math.floor(player.position.y / roomSize.y)).roomData[1].length == 0) {floor++; gen();} break;
		}
	};

	document.onkeyup = function(event) {
		switch (event.keyCode) {
			case 87: 
			case 83: player.move = 0; break;
			case 68: 
			case 65: player.strafe = 0; break;
		}
	};
}

// functions
function lerp(val1,val2,amt) {
	return (1 - amt) * val1 + amt * val2
}

function delay(time) {

  return new Promise(resolve => setTimeout(resolve, time));
}

function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

function randInt(min,max) {

	if (min == max) {
		return min
	}
	return min + Math.floor(Math.random() * (max+1-min));
}

function makeRoom(name, position, exitDoors = [1,2], entrenceDoors = [3,4], decorations = []) {

	return new room(name, new rect(new vector2(roomSize.x*position.x,roomSize.y*position.y),new vector2(roomSize.x,roomSize.y)), [decorations, exitDoors, entrenceDoors])	
};

function makeMap() {
	for (let y in map.map){
		for (let x in map.map[y]) {
			if (map.get(x,y) != 0) {
				map.set(x,y,0)
			}
		}
	}

	lastRoom = null
	var lastDoor = 0

	var t = 100
	var g = 0
	while (g<=t) {
		if (lastRoom == null) {
			// var position = new vector2(randInt(0,mapSize.x-1),randInt(0,mapSize.y-1));
			var position = new vector2(0,0);
			if (endRoom != 0) {
				position = new vector2(Math.floor(endRoom.base.position.x/roomSize.x) ,Math.floor(endRoom.base.position.y/roomSize.y))
			}
			var exitDoors = [];
			var entrenceDoors = [];

			var check = 0;
			var posible = range(1,4)
			for (let v = 1; v<= 4; v++) {
				var c = randInt(0,posible.length-1)
				var d = posible[c]
				posible.splice(c,1);

				if (d == 1 && position.y != 0 && map.get(position.x,position.y-1) == 0) {
					exitDoors.push(d)
					check++
					break;
				} if (d == 3 && position.y != mapSize.y-1 && map.get(position.x,position.y+1) == 0) {
					exitDoors.push(d)
					check++
					break;
				}if (d == 4 && position.x != 0 && map.get(position.x-1,position.y) == 0) {
					exitDoors.push(d)
					check++
					break;
				} if (d == 2 && position.x != mapSize.x-1 && map.get(position.x+1,position.y) == 0) {
					exitDoors.push(d)
					check++
					break;
				}
			}

			// console.log(exitDoors)
			
			lastDoor = exitDoors[0]
			var r = makeRoom("1",position,exitDoors,entrenceDoors)
			map.set(position.x,position.y,r)
			lastRoom = r;
			player.position = new vector2(position.x * roomSize.x + roomSize.x/2 , position.y * roomSize.y + roomSize.y/2)
		} else {
			var exitDoors = [];
			var entrenceDoors = []
			var a = 0
			if (lastDoor <= 2) {
				a = lastDoor + 2
			} else {
				a = lastDoor - 2
			}

			entrenceDoors.push(a)
			var x = lastRoom.base.position.x/roomSize.x;
			var y = lastRoom.base.position.y/roomSize.y;

			if (a == 1) {
				y++
			}if (a == 2) {
				x--
			}if (a == 3) {
				y--
			}if (a == 4) {
				x++
			}

			var check = 0
			var posible = range(1,4)
			for (let v = 1; v<= 4; v++) {
				var c = randInt(0,posible.length-1)
				var d = posible[c]
				posible.splice(c,1);

				if (d == 1 && y != 0 && map.get(x,y-1) == 0) {
					exitDoors.push(d)
					check++
					break;
				} if (d == 3 && y != mapSize.y-1 && map.get(x,y+1) == 0) {
					exitDoors.push(d)
					check++
					break;
				}if (d == 4 && x != 0 && map.get(x-1,y) == 0) {
					exitDoors.push(d)
					check++
					break;
				} if (d == 2 && x != mapSize.x-1 && map.get(x+1,y) == 0) {
					exitDoors.push(d)
					check++
					break;
				}
			}
			if (stop != 0) {
				stop = 0
				break
			}
			if (check == 0) {
				stop++
			}

			var position = new vector2(x,y);

			var r = makeRoom("2",position,exitDoors,entrenceDoors)
			map.set(position.x,position.y,r)
			lastRoom = r;
			lastDoor = exitDoors[0]
		}
		g++
	}
};

var atempts = 0
function gen() {
	roomsAmt = floor*3
	holes = range(mapSize.x * mapSize.y - roomsAmt - 10 ,mapSize.x * mapSize.y - roomsAmt );
	makeMap();
	while (true) {
		atempts++
		if (!holes.includes(map.count(0))) {
			makeMap();
		} else {
			console.log("Holes:".concat(map.count(0)))
			console.log("atempts:".concat(atempts))
			break;
		}
	}
	endRoom = lastRoom;
	document.title = "done"
	def = false
	atempts = 0;
}

function gameLoop() {
	// if (map.get(Math.floor(player.position.x / roomSize.x),Math.floor(player.position.y / roomSize.y)).roomData[1].length == 0) {floor++; gen();}
	// get and display fps
	cycleCount+=180/Math.PI;
	if (cycleCount >= 60) cycleCount = 0;
	var startTime = Date.now();
	var cycleTime = startTime - oldCycleTime;
	oldCycleTime = startTime;
	if (cycleCount % 60 == 0) fps_rate = Math.floor(1000 / cycleTime);

	//change the title
	if (def && document.title != "Personal intrest game") {
		document.title = "Personal intrest game"
	}

	// adjust the window size

	camOffset.x = lerp(camOffset.x,Math.floor(player.position.x / roomSize.x) * roomSize.x,0.1)
	camOffset.y = lerp(camOffset.y,Math.floor(player.position.y / roomSize.y) * roomSize.x,0.1)
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var mapOffset = new vector2(canvas.width / 2 - HALF_WIDTH - camOffset.x ,canvas.height / 2 - HALF_HEIGHT - camOffset.y)

	// clearing the screen
	context.fillStyle = "#333333";
	context.fillRect(0,0,canvas.width,canvas.height)

	context.fillStyle = '#000000';
	context.fillRect(mapOffset.x, mapOffset.y, WIDTH*mapSize.x, HEIGHT*mapSize.y);
	
	
	for (let y in map.map){
		for (let x in map.map[y]) {
			var spot = map.get(x,y)
			if (spot != 0) {
				spot.draw()
			} else {
				var rec2 = new rect(new vector2(x * roomSize.x + roomSize.x * roomBoarder - camOffset.x,y * roomSize.y + roomSize.x * roomBoarder - camOffset.y), new vector2(roomSize.x-roomSize.x*(roomBoarder*2),roomSize.y-roomSize.y*(roomBoarder*2)))
				rec2.draw("#050505")
			}
		}
	}
	
	// player movement
	{
		if (player.move != 0){
			player.position.y -= player.move / 16 * player.speed

			var data = context.getImageData(player.position.x+mapOffset.x, player.position.y+mapOffset.y, 1, 1).data;
			if (data[0] == 0 && data[1] == 0 && data[2] == 0){
				player.position.y += player.move / 16 * player.speed
			}

		} if (player.strafe != 0) {
			player.position.x += player.strafe / 16 * player.speed

			var data = context.getImageData(player.position.x+mapOffset.x, player.position.y+mapOffset.y, 1, 1).data;
			if (data[0] == 0 && data[1] == 0 && data[2] == 0){
				player.position.x -= player.strafe / 16 * player.speed
			}
		};
	};
	
	// draw player
	{
		context.fillStyle = 'Red';
		context.beginPath();
    context.arc(player.position.x+mapOffset.x, player.position.y+mapOffset.y, roomSize.x/20, 0, DOUBLE_PI);
    context.fill();
 	}
	
	// room updates
	{
		var plrX = Math.floor(player.position.x / roomSize.x)
		var plrY = Math.floor(player.position.y / roomSize.y)
		if (nextRoom) nextRoom.next = false
		if (map.get(plrX,plrY) != 0) {
			map.get(plrX,plrY).entered = true
			var a = map.get(plrX,plrY).roomData[1][0]
			if (a == 1 && map.get(plrX,plrY-1).entered == false) {
				map.get(plrX,plrY-1).next = true
				nextRoom = map.get(plrX,plrY-1)
			}if (a == 2 && map.get(plrX+1,plrY).entered == false) {
				map.get(plrX+1,plrY).next = true
				nextRoom = map.get(plrX+1,plrY)
			}if (a == 3 && map.get(plrX,plrY+1).entered == false) {
				map.get(plrX,plrY+1).next = true
				nextRoom = map.get(plrX,plrY+1)
			}if (a == 4 && map.get(plrX-1,plrY).entered == false) {
				map.get(plrX-1,plrY).next = true
				nextRoom = map.get(plrX-1,plrY)
			}
		}	
	}

	setTimeout(gameLoop, cycleDelay);
	
	context.fillStyle = 'Black';
	context.font = '50px Monospace';
	context.fillText('FPS: ' + fps_rate, 0, 50);
}
window.onload = function() {gen(); console.log("loaded"); gameLoop(); }