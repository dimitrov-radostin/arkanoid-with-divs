class Ball {
    constructor(objectsToIntactWith){
        this.position = $('#ball').offset()
        this.velocity = { top: 8, left: 5 * Math.random()} 
        this.size = $('#ball').height()
        this.objectsToIntactWith = objectsToIntactWith
        // no move check interaction and call their react function
    }

    checkCollision(obj){
        return !(
            ((this.position.top + this.size) < (obj.top)) ||
            (this.position.top > (obj.top + obj.height)) ||
            ((this.position.left + this.size) < obj.left) ||
            (this.position.left > (obj.left + obj.width))
        );
    }

    move(){
        this.objectsToIntactWith.forEach(obj => {
            if( this.checkCollision(obj) ) {
                this.velocity.top = -this.velocity.top
                this.velocity.left *= 0.9 + 0.2 * Math.random()
                if (typeof obj.collide === 'function'){
                    obj.collide()
                }
            }           
        });
        if (this.position.top >= $(window).height() - this.size){
            alert ('game over')
            return
        }

        if(
            this.position.top < 0 
        ) {
            this.velocity.top = -this.velocity.top
        }
        
        if(
            this.position.left < 0 ||
            this.position.left > $(window).width() - this.size
        ) {
            this.velocity.left = -this.velocity.left
        }
        
        this.position.top += this.velocity.top
        this.position.left += this.velocity.left

        $('#ball').offset(this.position)
        
        requestAnimationFrame(this.move.bind(this));
    }
}