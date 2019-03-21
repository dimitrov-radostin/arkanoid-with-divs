class Blocks {
    constructor(){
        this.count = 50
        this.all = []

        for (let i = 0; i < this.count; i++) {
            const newBlock = $('<div/>').addClass('block').attr('id', i)
            $('body').append(newBlock)
        }
        for (let i = 0; i < this.count; i++) {
            this.all.push(new Block(i))
        }
    }
}

class Block {
    constructor(id){
        const element = $(`div.block#${id}`)
        this.element = element
        this.width = element.width()
        this.height = element.height()
        this.top = element.position().top
        this.left = element.position().left
    }
    collide(){
        this.element.addClass('dead')
        this.width = 0
        this.height = 0
        this.top = 0
        this.left = 0
    }
}

// console.log( new Block(3));