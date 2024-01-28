let rectX = 70;
let fr = 100;
let yessir = 0;
let l = 0;
let n = 0;
let c = 0;
let huh = 0;
let WHY = 0;
let fct = 3;

function preload() {
  backgroundImage = loadImage('the_legend_of_zelda_breath_of_the_wild_happy_birthday_wallpaper_artwork.jpg'); // Load the background image
}


function setup() {


  createCanvas(200,200);

  noStroke()
  fr=100
  frameRate(fr)
  mon= 0
  x=100
  y=100
  d=1.3
  e=2
  c="yellow"
  no=20
  met=100
  ask=50
  fine=10
  
  hap=170
  sad=50
  fin=10
  et=100

  
  pu1h=100
pu1v=100
  
pu2h=58
pu2v=32

pu3h=53
pu3v=155

pu4h=120
pu4v=30

pu5h=150
  pu5v= 170
  pu6h=135
  pu6v=85
  
   

}

function draw() {
  
    
  background(210);
  background(backgroundImage); 
  fill(c)

  
  x=x-d
  y=y+e  
  

  if(y >= 200||y <= 0){
    e=-e
  }

  

  
    if(keyCode == 38 && huh == 0){
    ask = ask-2

}

  if(keyCode ===  UP_ARROW && keyCode === 87 && huh == 1){
    ask = ask-1

  }

  if(keyCode ===  UP_ARROW && huh == 2){
    ask = ask+2

  }

  if(keyCode ===  UP_ARROW && huh == 3){

    ask = ask-5
  }

  if(keyCode ===  UP_ARROW && huh == 4){

  ask = ask-2
    no = no - fct
  }


  if(keyCode === DOWN_ARROW && huh == 0){

    ask = ask+2
  }

  if(keyCode === DOWN_ARROW && huh == 1){

    ask = ask+1
  }
 
  if(keyCode === DOWN_ARROW && huh == 2){

    ask = ask-2
  }

  if(keyCode === DOWN_ARROW && huh == 3){

    ask = ask+5
  }

  if(keyCode === DOWN_ARROW && huh == 4){

    ask = ask+2
    no = no - fct
  }
  if(huh == 4 && no < 0 || no > 20){
    fct=-fct
  }
  

  if(keyCode === 87 && n == 0){
    sad = sad-2

  }

    if(keyCode === 87 && n == 1){
      sad = sad-1

    }
  
    if(keyCode === 87 && n == 2){
      sad = sad+2

    }
  
    if(keyCode === 87 && n == 3){

      sad = sad-10
    }
  
    if(keyCode === 87 && n == 4){

      sad = sad-2
      hap = hap - fct
    }

  if(keyCode === 83 && n == 0){
    sad = sad+2

  }

    if(keyCode === 83 && n == 1){
      sad = sad+1

    }

    if(keyCode === 83 && n == 2){
      sad = sad-2

    }

    if(keyCode === 83 && n == 3){

      sad = sad+10
    }

    if(keyCode === 83 && n == 4){


      sad = sad+2
      hap = hap + fct
    }
  if(n == 4 && hap > 200 || hap < 170){
    fct=-fct
  }
  if(d == 2 ){

    fr = 12 
  } else{
    fr = 30
  }


  if(x <= no && x >= no-met && y > ask && y < ask+met){
  
    
   
  d=-d

    c="yellow"
        mon=mon+1
     print("point"+mon)

    fr = 30
 
    d=d*1.05

    
} 
    if(x >= hap && x<= hap+20 && y > sad && y < sad+et){



    d=-d
   
      c="blue"
          mon=mon+1
       print("point"+mon)
   
  
      fr= 30
 
  
     
  } 
if(x< 0){
  x = 99999999
  print("red side won !")
}
   if(x > 200){
     x = 99999999
     print("blue side won !")
   }
  
fill("red")
  rect(no,ask,fine,met)
  fill("blue")
  rect(hap,sad,fin,et)
  fill("lightgreen")
   circle(pu1h,pu1v,20)
  fill("green")
  circle(pu2h,pu2v,20)
  fill("orange")
  circle(pu3h,pu3v,20)
  fill("lightblue")
  circle(pu4h,pu4v,20)
  fill("blue")
   circle(pu5h,pu5v,20)
  fill("red")
   circle(pu6h,pu6v,20)
fill(c)
  circle(x,y,20)
  if(x < pu1h+10 && x > pu1h -10 && y > pu1v-10 && y < pu1v+10    ){
    huh = 1
  } 
  if(x < pu2h+10 && x > pu2h -10 && y > pu2v && y < pu2v+10 ){
    huh = 2
  }
  if(x < pu3h+10 && x > pu3h -10 && y > pu3v && y < pu3v+10 ){
    huh = 3
  }
  if(x < pu4h+10 && x > pu4h -10 && y > pu4v && y < pu4v+10){
    huh = 4
  }
  if(x < pu5h+10 && x > pu5h -10 && y > pu5v && y < pu5v+10 ){
    d = 2
  }
  if(x < pu1h+10 && x > pu1h -10 && y > pu1v && y < pu1v+10 ){
    n = 1
  }
  if(x < pu2h+10 && x > pu2h -10 && y > pu2v && y < pu2v+10 ){
    n = 2
  }
  if(x < pu3h+10 && x > pu3h -10 && y > pu3v && y < pu3v+10 ){
    n = 3
  }
  if(x < pu4h+10 && x >pu4h -10 && y > pu4v && y < pu4v+10 ){
    n = 4
  }
  if(x < pu5h+10 && x > pu5h -10 && y > pu5v && y < pu5v+10 ){
    d = 2
  }

  
  if(x < pu6h+10 && x > pu6h -10 && y > pu6v && y < pu6v+10 ){
    hap -2
    no+ 2
  }


  print(huh)

}

