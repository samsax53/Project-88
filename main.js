var canvas = new fabric.Canvas('myCanvas');

ball_x = 10;
ball_y = 10;
hole_x = 800;
hole_y = 400;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		})
		canvas.add(hole_obj);
	})
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		})
		canvas.add(ball_obj);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((hole_x==ball_x)&&(hole_y==ball_y)) {
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML = "You hit the goal!"
		document.getElementById("myCanvas").style.borderColor = "red";
	}

		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
function up() {
    if(ball_y >= 20){
        ball_y = ball_y - block_image_height;
        canvas.remove(ball_obj);
        load_img();
    }
}

function down() {
    if(ball_y <= 430){
        ball_y = ball_y + block_image_height;
        canvas.remove(ball_obj);
        load_img();
    }
}

function right() {
    if(ball_x <= 1030){
        ball_x = ball_x + block_image_width;
        canvas.remove(ball_obj);
        load_img();
    }
}

function left() {
    if(ball_x >= 20){
        ball_x = ball_x - block_image_width;
        canvas.remove(ball_obj);
        load_img();
    }
}

