var i=0
var typeWriter ='Selamat datang di portfolio saya!'

function mengetik(){
    if(i < typeWriter.length){
        document.getElementById('text').innerHTML += typeWriter.charAt(i)
        i++;
        setTimeout(mengetik, 50)
    }
}

