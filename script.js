//Variables
let x = 50;
let y = 0;
let cx = 100;
let cy = 0;
let x2 = 0;
let y2 = 0;
let cm = false;
let score = 0;


//setup function is ran only once
function setup(){
	//Plot background
	plot('500px','400px',0,0,"purple","");
	//load images
	ImgSprite('bullet.png',10,10,'c',0,0);
	ImgSprite('img.png',30,30,'m',0,0);
}

//The key function is ran on keypresses
function key(){
	//Clear screen to blit sprites
	clear("p");
	
	//Show text
	Text(score,"t",100,100,["div","b","Verinda"]);
	
	//Show text
	show("t");
	
	//Load images
	ImgSprite('bullet.png',10,10,'c',0,0);
	ImgSprite('img.png',60,65,'m',0,0);
	//Place images
	MoveTo("c",x,y);
	MoveTo("m",0,0);
	
	//KeyPresses
	document.addEventListener("keydown",
	function(event){
		//speed
		let s = 5;
		
		//check key name
		if(event.key=="ArrowDown"){
			cy = s;cx = 0;
		}

		if(event.key=="ArrowUp"){
			cy = -s;cx = 0
		}
		if(event.key=="ArrowRight"){
			cx = s;cy = 0;
		}

		if(event.key=="ArrowLeft"){
			cx = -s;cy = 0;
		}

	}
	);
	
	//Collision detection
	if(collide("m","c")){
		score ++;
		x=Math.random()*100;
		y=Math.random()*100;
	}
	
	//Update position
	x += cx;
	y += cy;
	
}