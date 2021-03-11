class Stone {
    constructor(){
        this.x = random(35, 965);
        this.y = 50;
        this.rad = 20;
        this.g = random(0.05, 0.12);
        this.v = 0;
        this.dim = random(20, 25, 30);

    }
    stoneshow() {

        fill(125);
        strokeWeight = 2;
        stroke(0);
        rect(this.x, this.y, this.dim, this.dim);
    }

    update() {
        this.v += this.g;
        this.y += this.v;
    }

    isOutOfScreen() {
        if( this.y> 680) {
            return true;
        } else {
            return false;
        }
    }

    collides(slide) {

        //console.log(slide.x_ini);
        //console.log(slide.y_ini);

        if(this.y > slide.y_ini && this.y < slide.y_ini + 30) {
            if(this.x >slide.x_ini && this.x < slide.x_ini +120){
                return true;
            }
        }
    }
}