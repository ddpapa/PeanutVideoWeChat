var flag = true

function throttle(fun,dely){
    
    if(flag){
        setTimeout(() => {
            fun();
            flag = true
        }, dely);
        flag = false
    }
    

}