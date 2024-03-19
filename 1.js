let element=document.getElementById("container");
let up=0;
let left=0;
document.addEventListener('keydown',event=>{
    if(event.key='Arrow'){
    document.getElementById('container').innerHTML=`&#128520`;
    document.getElementById('container').style.fontSize='80px';

        let key=event.key;
        switch(key){
            case 'ArrowDown':  up+=10;
            document.getElementById('container').style.top=`${up}px`;
            document.getElementById('container').style.backgroundColor=`pink`;
            break;

            case 'ArrowUp': 
            if(!up){
                break;
            }
            up-=10;
            document.getElementById('container').style.top=`${up}px`;
            document.getElementById('container').style.backgroundColor=`pink`;
            break;

            case 'ArrowRight': left+=10;
            document.getElementById('container').style.left=`${left}px`;
            document.getElementById('container').style.backgroundColor=`pink`;
            break;

            case 'ArrowLeft':  
            if(!left){
                break;
            }
            left-=10;
            document.getElementById('container').style.left=`${left}px`;
            document.getElementById('container').style.backgroundColor=`pink`;
            break;
        }
        }
document.addEventListener('keyup',event=>{
    document.getElementById('container').innerHTML=`Hello &#128513;`;
    document.getElementById('container').style.backgroundColor=`rgba(0, 0, 255, 0.416)`
})
    }
)