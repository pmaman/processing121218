var bg_color_canvas = '#fae';
var bg_color_ellipse = '#000'

function setup(){
     createCanvas(1280,1280,WEBGL);
     strokeWeight(1);
     stroke('#fff')

}

function draw(){
     fill(bg_color_ellipse);
     background(bg_color_canvas);
     //ellipse(mouseX*2,mouseY*2,80,100);
     //ellipse(mouseX/2,mouseY/2,80,100);
     //rotateX(frameCount*.004)
     //rotateY(frameCount*.01)
     rotateX(mouseY*-.2);
     rotateY(mouseX*-.2);
     cylinder(100,50,0,1);
     torus(100,50);


}

function mouseClicked(){
     if (bg_color_ellipse=='#000'){
          bg_color_ellipse = '#fae';
          bg_color_canvas = '#000';
     } else{
          bg_color_ellipse = '#000';
          bg_color_canvas = '#fae';
     }
}
