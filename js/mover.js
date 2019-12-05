function IzquierdaDerecha(x){
    document.getElementById(x).className = document.getElementById(x).className.replace( /(?:^|\s)izquierda(?!\S)/g , 'IzquierdaDerecha' );
    document.getElementById(x).className = document.getElementById(x).className.replace( /(?:^|\s)derecha(?!\S)/g , 'IzquierdaDerecha' );
}

function aparecer(x){
    document.getElementById(x).className = document.getElementById(x).className.replace( /(?:^|\s)opacidad0(?!\S)/g , 'opacidad1' );
}