const teksHTML = document.getElementById('hasil');
const input = document.getElementById('code');

function ubahKode(string){
    let uniCode = 0;
    let strToArray = [];
    strToArray = string.toUpperCase().split('');
    
    for(let i = 0; i < strToArray.length; i++){
        uniCode = strToArray[i].charCodeAt();
        if(uniCode >= 65 && uniCode <= 90){
            if(uniCode > 77){
                uniCode = uniCode - 13;
            } else{
                uniCode = uniCode + 13;
            }
        strToArray.splice(i,1,String.fromCharCode(uniCode));
        }
    }

    let hasil = strToArray.join('')
    return tampilkanTeks(hasil);
}

function ubahText(string){
    string = document.getElementById('code').value;
    return ubahKode(string);
}

function tampilkanTeks(teks){
    teksHTML.innerText= teks;
}

input.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        ubahText();
    }
})