$(() => {
    const platformWidth = $('#platform').width()
    const step = 2
    
    $(window).keydown(event => {
        switch (event.key) {
            case 'ArrowLeft':
                prevLeft = $('#platform').offset().left
                if(prevLeft < step){
                    $('#platform').offset({left: prevLeft + step})  
                }else{
                    $('#platform').offset({left: prevLeft - step})
                }
                break;
            case 'ArrowRight':
                prevLeft = $('#platform').offset().left
                if(prevLeft > $(window).width() - platformWidth - step){
                    $('#platform').offset({left: prevLeft - step})  
                }else{
                    $('#platform').offset({left: prevLeft + step})
                }
                break;
        
            default:
                return
        }
    })
})

