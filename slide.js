class Slide {
    constructor() {
        //this.x = 200;
        //this.y = height/2;
        // this.r = 25
        //this.gravity = 0.3;
        //this.velocity = 0;
        this.x_ini = 20;
        this.y_ini = 500;
        this.slideWidth = 120;
        this.slideHeight = 30;
        this.c = false;
        this.score = 0;



    }
    show() {
        fill(0);
        rect(this.x_ini, this.y_ini, this.slideWidth, this.slideHeight);
        //ellipse(this.x, this.y, this.r*2);
    }

    update() {

        if(this.x_ini < 0){
            this.x_ini = 0;
        }

        if(this.x_ini > 880){
            this.x_ini = 880;
        }

        if(this.y_ini > 560){
            this.y_ini = 560;
        }

    }

    left() {
        this.x_ini -= 40;
    }

    right() {
        this.x_ini += 40;
    }

    up() {
        this.y_ini -= 20;
    }

    down() {
        this.y_ini += 20;
    }

    get_x(){
        return this.x_ini;
    }

    get_y(){
        return this.y_ini;
    }

    update_score(s){
        this.score += s;
        if(this.score<0) {
            this.score = 0;
        }
    }

    checkWinnerStatus(){
        if(this.y_ini<50){
            return true;
        }        
    }

    CheckLossStatus(){
        if(this.y_ini>560){
            return true;
        }
    }

    view_score(){
        return this.score;
    }
}