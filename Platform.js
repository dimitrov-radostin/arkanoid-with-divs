class Platform{
    constructor(){
        this.width = $('#platform').width()
        this.height = $('#platform').height()
        this.top = $('#platform').position().top
        this.left = $('#platform').offset().left
        this.step = 14

        // setting eventListener
        $(window).keydown(event => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.moveLeft(1) 
                    break;
                case 'ArrowRight':
                    this.moveLeft(-1)
                    break;
                default:
                    return
            }
        })
    }

    moveLeft(sign){
        this.left -= sign * this.step
        if(this.left < 0 || this.left > $(window).width() - this.width){
            this.left += 2 * sign * this.step
        }
        $('#platform').offset({ left: this.left })
    }
}
