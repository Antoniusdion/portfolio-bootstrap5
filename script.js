var i=0
var typeWriter ='Selamat datang di portfolio saya!'

function mengetik(){
    if(i < typeWriter.length){
        document.getElementById('text').innerHTML += typeWriter.charAt(i)
        i++;
        setTimeout(mengetik, 50)
    }
}

var yakin = confirm("Apakah anda yakin akan mengunjungi situs lain ?");

    if (yakin) {
         window.location = "https://www.google.com/";
} 

var ulangi = confirm("Apakah anda mau mengulang?");
var counter = 0;

while(ulangi){
    counter++;
    ulangi = confirm("Apakah anda mau mengulang?");
}

var pertanyaan = confirm("Apakah kamu Ingin tahu sesuatu?")

