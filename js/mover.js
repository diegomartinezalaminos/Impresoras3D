
//Esta función es la encargada de que vuelva toto a su sitio
function IzquierdaDerecha(x){
    //Estas dos frases buscan el elemato con la id = "x" y remplazan una de sus clases (izquierda o derecha) por otra que se le especifique (IzquierdaDerecha)
    document.getElementById(x).className = document.getElementById(x).className.replace( /(?:^|\s)izquierda(?!\S)/g , 'IzquierdaDerecha' );
    document.getElementById(x).className = document.getElementById(x).className.replace( /(?:^|\s)derecha(?!\S)/g , 'IzquierdaDerecha' );
}
//Esta función es la encargada de que aparezcan los elementos
function aparecer(x){
    //Esta frases buscan el elemato con la id = "x" y remplazan una de sus clases (opacidad0) por otra que se le especifique (opacidad1)
    document.getElementById(x).className = document.getElementById(x).className.replace( /(?:^|\s)opacidad0(?!\S)/g , 'opacidad1' );
}