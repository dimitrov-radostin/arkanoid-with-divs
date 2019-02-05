class Ball {
    constructor(){
        this.position = $('#ball').offset()
        this.velocity = { top: 0.5 + Math.random(), left: Math.random()} 
        this.size = $('#ball').height()
    }
    move(){
        this.position.top += this.velocity.top
        this.position.left += this.velocity.left

        if(
            this.position.top < 0 ||
            this.position.top > $(window).height() - this.size
        ) {
            this.velocity.top = -this.velocity.top
        }
        
        if(
            this.position.left < 0 ||
            this.position.left > $(window).width() - this.size
        ) {
            this.velocity.left = -this.velocity.left
        }


        $('#ball').offset(this.position)
        
        requestAnimationFrame(this.move.bind(this));
    }
}