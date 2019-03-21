$(() => {
    const platform = new Platform()
    const blocks = new Blocks()
    const ball = new Ball([ platform, ...blocks.all ])

    ball.move()
})

