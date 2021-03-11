class Gem {

    constructor() {
        this.x_ini = random(35, 965);
        this.y_ini = 50;
        this.r = 20;
        this.gravity = 0.05;
        this.velocity = 0;
        this.rc = random(220, 255);
        this.gc = random(30,50);
        this.bc = random(70, 105);
    }

    show() {
        //fill(237, 34, 93);
        fill(this.rc, this.gc, this.bc);
        ellipse(this.x_ini, this.y_ini, this.r*2);
    }

    update() {
        this.velocity += this.gravity;
        this.y_ini += this.velocity;
    }

    isOutOfScreen() {
        if( this.y_ini > 680) {
            return true;
        } else {
            return false;
        }
    }

    collides(slide) {

        //console.log(slide.x_ini);
        //console.log(slide.y_ini);

        if(this.y_ini > slide.y_ini && this.y_ini < slide.y_ini + 30) {
            if(this.x_ini >slide.x_ini && this.x_ini < slide.x_ini +120){
                return true;
            }
        }
    }
}