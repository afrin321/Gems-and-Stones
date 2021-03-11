let slide;
let gem = [];
let stone = [];

function setup() {
    createCanvas(1000, 580);
    slide =  new Slide();
    gem.push(new Gem());
    stone.push(new Stone());
    
}

function draw() {
    background(125, 214, 247);
        
    slide.update();
    for(let j=0;j<stone.length;j++) {

        stone[j].update();
        if(stone[j].collides(slide)) {
            stone.splice(j,1);
            slide.down();
            slide.update_score(-20);
            //console.log('Collision!!');
            //noLoop();
        }    

        if(stone[j]) {
            stone[j].stoneshow();
        }

        if(stone[j]) {
            if(stone[j].isOutOfScreen()) {
                stone.splice(j,1);
                slide.update_score(3);
            }            
        }
    }
    
    for(let i=0;i<gem.length;i++) {

        gem[i].update();
        if(gem[i].collides(slide)) {
            gem.splice(i,1);
            slide.up();
            slide.update_score(20);
            //console.log('Collision!!');
            //noLoop();
        }


        if(gem[i]) {
            gem[i].show();
        }

        if(gem[i]) {
            if(gem[i].isOutOfScreen()) {
                gem.splice(i,1);
                slide.update_score(-5);
            }            
        }
        
        
        

        
    }
    slide.show();

    if(frameCount % 70 == 0) {
        gem.push(new Gem());
    }
    if(frameCount % 50 == 0) {
        stone.push(new Stone());
    }

    if(slide.checkWinnerStatus()==true){
        alert("Congrats! You have won the game. "+"Score: "+" "+slide.view_score());
        console.log("You won!");
        console.log(slide.view_score());
        noLoop();
    }

    if(slide.CheckLossStatus()==true){
        alert("Uh oh! You have lost the game. Refresh to try again! "+"Score: "+" "+slide.view_score());
        console.log("You have lost the game.");
        console.log(slide.view_score());
        noLoop();
    }

    
}

function keyPressed(){
    if(key == 'ArrowLeft'){
        slide.left();
    }

    if(key == 'ArrowRight'){
        slide.right();
    }

    if(key == 'p'){
        pause = true;
        noLoop();
    }
}