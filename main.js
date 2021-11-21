canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 130;
rover_height = 100;

background_image = "mars.jpg";
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add(){
    background_newimage = new Image();
    background_newimage.onload = uploadBackground;
    background_newimage.src = background_image;

    rover_newimage = new Image();
    rover_newimage.onload = uploadRover;
    rover_newimage.src = rover_image;

}

function uploadBackground(){
    ctx.drawImage(background_newimage, 0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_newimage, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);
if (keyPressed=="38"){
    up();
    console.log("up");

}
if (keyPressed=="40"){
    down();
    console.log("down");
}
if (keyPressed=="37"){
    left();
    console.log("left");
}
if (keyPressed=="39"){
    right();
    console.log("right");
}
}

function up(){
    if (rover_y>= 0){
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed x=" + rover_x + " y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if (rover_y <= 600){
        rover_y = rover_y +10;
        console.log("When down arrow is pressed x=" + rover_x + " y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if (rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed x=" + rover_x + " y=" + rover_y);
        uploadBackground();
        uploadRover()
    }
}

function right(){
    if (rover_x <= 600){
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed x=" + rover_x + " y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
